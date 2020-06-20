module.exports = {
  // api path
  api: {
    // base: '/taikang/api',
    development: {
      VUE_APP_BMW: JSON.stringify('http://47.97.206.233:9008'),
      VUE_APP_BMW_REFUND: JSON.stringify('http://54.193.54.227:8026'),
      VUE_APP_BMW_LOGIN: JSON.stringify('http://47.111.177.216:8029/sys'),
      VUE_APP_BMW_LOGIN_APPID: JSON.stringify('dingoaqyicsz1sblxfiw1a'),
    },
    production: {
      VUE_APP_BMW: JSON.stringify('http://api-bmw.kapeixi.cn'),
      VUE_APP_BMW_REFUND: JSON.stringify('http://api-bmw.kapeixi.cn'),
      VUE_APP_BMW_LOGIN: JSON.stringify('http://api-customer.kapeixi.cn/sys'),
      VUE_APP_BMW_LOGIN_APPID: JSON.stringify('dingoa87xbudtxdqpgvgfg'),
    },
  },

  // build
  buildDir: './dist',

  // proxy
  devServer: {
    port: 8000,
  },

}
