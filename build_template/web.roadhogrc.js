/**
 * this is web configuration
 */
const publicPath = '/assets/';
const svgSpriteDirs = [
  // path.resolve(__dirname, 'src/svg/'),  // 业务代码本地私有 svg 存放目录
  require.resolve('antd').replace(/index\.js$/, ''),
];

export default {
  entry: 'src/index.js',
  extraBabelPlugins: [
    'transform-runtime',
    [
      'import',
      [
        {
          'libraryName': 'antd',
          'style': true,
        }
      ]
    ],
    "lodash"
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
    production: {}
  },
  proxy: {
    "/api": {
      "target": "http://localhost:8080/"
    },
    "/app" :{
      "target": "http://localhost:8000/",
      "pathRewrite": { "^/app.*$" : "/app.html" }
    }
  },
  multipage: true,
  "theme": "./src/styles/theme.js",
  publicPath,
  define: {publicPath}
}
