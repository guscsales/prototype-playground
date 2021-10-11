import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <footer className="border border-t border-b-0 border-gray-300 py-3 text-center text-xs text-gray-600">
        Playground built by Gus -{' '}
        <a
          href="https://twitter.com/gussalesdev"
          rel="noopener noreferrer"
          target="_blank"
          className="text-blue-500"
        >
          @gussalesdev
        </a>{' '}
      </footer>
    </>
  );
}

export default MyApp;
