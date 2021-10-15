const arrayMethods = [
  {
    name: 'filter',
    callbackParamsOrder: ['element', 'index', 'array'],
  },
  {
    name: 'find',
    callbackParamsOrder: ['element', 'index', 'array'],
  },
  {
    name: 'findIndex',
    callbackParamsOrder: ['element', 'index', 'array'],
  },
  {
    name: 'map',
    callbackParamsOrder: ['element', 'index', 'array'],
  },
  {
    name: 'flat',
    callbackParamsOrder: null,
  },
  {
    name: 'flatMap',
    callbackParamsOrder: ['element', 'index', 'array'],
  },
  {
    name: 'forEach',
    callbackParamsOrder: ['element', 'index', 'array'],
    extraMessage: 'The method "forEach" does not return any value.',
  },
  {
    name: 'reduce',
    callbackParamsOrder: ['previousValue', 'currentValue', 'index', 'array'],
  },
  {
    name: 'some',
    callbackParamsOrder: ['element', 'index', 'array'],
  },
  {
    name: 'every',
    callbackParamsOrder: ['element', 'index', 'array'],
  },
  {
    name: 'reverse',
    callbackParamsOrder: null,
  },
  {
    name: 'toString',
    callbackParamsOrder: null,
  },
  {
    name: 'shift',
    callbackParamsOrder: null,
    resultDifferentOfReturn: true,
  },
  {
    name: 'pop',
    callbackParamsOrder: null,
    resultDifferentOfReturn: true,
  },
];

export default arrayMethods;
