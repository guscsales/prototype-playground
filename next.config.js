const removeImports = require('next-remove-imports')();

module.exports = {
  reactStrictMode: true,
  ...removeImports({
    experimental: { esmExternals: true },
  }),
};
