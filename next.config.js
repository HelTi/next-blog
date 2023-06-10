const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, './src/styles')],
  },
  async rewrites() {
    return [
      // {
      //   source: '/',
      //   destination: '/article/page/1',
      // },
    ];
  },
}