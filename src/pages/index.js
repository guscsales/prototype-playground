import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import '@uiw/react-textarea-code-editor/dist.css';
import { useFormik } from 'formik';
import arrayMethods from '../data/arrays';

const CodeEditor = dynamic(
  () => import('@uiw/react-textarea-code-editor').then((mod) => mod.default),
  { ssr: false },
);

export default function Home() {
  const [result, setResult] = React.useState(null);
  const [currentMethod, setCurrentMethod] = React.useState(arrayMethods[0]);
  const formik = useFormik({
    initialValues: {
      method: currentMethod.name,
      value: '[1,2,3,4]',
      callback: 'return element > 0',
    },
    onSubmit: ({ value, method, callback }) => {
      const functionStructure = `${value}.${method}(function (${currentMethod.callbackParamsOrder.join(
        ',',
      )}) { ${callback} })`;

      let result;

      try {
        result = eval(functionStructure);
      } catch (e) {
        result = e.message;
      }

      setResult(JSON.stringify(result, null, 2));
    },
  });

  return (
    <>
      <Head>
        <title>Online Array Manipulator - Prototype Playground</title>
        <meta
          name="description"
          content="Have fun discovering and testing how Javascript arrays functions works using this online playground."
        />
        <meta
          name="keywords"
          content="javascript,arrays,prototype,filter,find,map,reduce,javascript playground"
        />
      </Head>

      <div className="max-w-2xl mx-auto lg:px-6 px-2 py-6">
        <div className="mb-10">
          <h1 className="text-4xl text-center mb-3 font-semibold">
            Prototype Playground
          </h1>
          <h2 className="text-3xl text-center">Array</h2>
        </div>

        {/* <div className="bg-gray-200 text-gray-300 text-center py-5 rounded-lg mb-10">
          Advertisement
        </div> */}

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="text-sm font-semibold">Choose the method</label>
            <br />
            <div className="grid gap-2 grid-cols-3 mt-3">
              {arrayMethods.map((methodMetadata) => (
                <button
                  type="button"
                  onClick={() => {
                    setResult(null);
                    setCurrentMethod(methodMetadata);
                    formik.setFieldValue('method', methodMetadata.name);
                  }}
                  key={methodMetadata.name}
                  className={`rounded-lg p-2 hover:bg-gray-400 hover:text-white ${
                    methodMetadata.name === formik.values.method &&
                    'bg-gray-500 text-white pointer-events-none'
                  }`}
                >
                  {methodMetadata.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="text-sm font-semibold">Paste your array</label>
            <br />
            <CodeEditor
              value={formik.values.value}
              language="js"
              placeholder="e.g.: [1, 2, 3]"
              onChange={(evn) =>
                formik.setFieldValue('value', evn.target.value)
              }
              padding={16}
              style={{
                fontSize: 14,
                fontFamily:
                  'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
              }}
              className="rounded-lg border border-gray-300"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Callback function</label>
            <br />
            <div className="rounded-lg border border-gray-300 px-3 py-2">
              <span className="text-sm text-gray-400 pointer-events-none select-none">{`function(${arrayMethods
                .find(({ name }) => name === formik.values.method)
                .callbackParamsOrder.join(', ')}) {`}</span>
              <br />
              <CodeEditor
                value={formik.values.callback}
                language="js"
                placeholder="e.g.: return element > 0"
                onChange={(evn) =>
                  formik.setFieldValue('callback', evn.target.value)
                }
                padding={16}
                style={{
                  fontSize: 14,
                  fontFamily:
                    'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
              />
              <span className="text-sm text-gray-400 pointer-events-none select-none">{`}`}</span>
            </div>
          </div>

          <div className="flex justify-center my-8">
            <button
              type="submit"
              className="w-full lg:w-40 bg-indigo-600 text-white rounded-lg p-2 hover:bg-indigo-500"
            >
              See Result
            </button>
          </div>
        </form>

        <div>
          <label className="text-sm font-semibold">Result</label>
          <br />
          <pre className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-500 overflow-x-auto overflow-y-hidden ">
            {currentMethod.extraMessage && currentMethod.extraMessage}
            {!currentMethod.extraMessage && result === null
              ? `Click to see the result for .${formik.values.method}()`
              : result}
          </pre>
        </div>

        <div className="flex my-7">
          {/* <div className="rounded-full bg-gray-800 w-2 h-2 mr-1" />
          <div className="rounded-full bg-gray-800 w-2 h-2 mr-1" />
          <div className="rounded-full bg-gray-800 w-2 h-2 mr-1" /> */}
        </div>

        {/* <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-4">
            Learn more about the method{' '}
            <span className="text-indigo-600">
              "Array.prototype.{formik.values.method}"
            </span>
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
        </div> */}
      </div>
    </>
  );
}
