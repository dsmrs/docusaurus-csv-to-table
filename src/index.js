module.exports = function (context, options) {
  return {
    name: 'docusaurus-csv-to-table',
    configureWebpack(config, isServer, utils) {
      const {getJSLoader} = utils;
      return {
        module: {
          rules: [
                {
                  test: /\.csv$/,
                  loader: 'raw-loader',
                  options
                }
              ],
        },
      };
    },
  };
};
