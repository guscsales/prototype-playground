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
    name: 'map',
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
];

export default arrayMethods;
