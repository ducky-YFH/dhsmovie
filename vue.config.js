module.exports = {
  publicPath: 'dhsmovie',
  devServer: {
    open: true,                                 //配置自动启动浏览器
    host: 'localhost',
    port: 8080,                                 // 端口号
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://39.97.33.178',
        changeOrigin: true
      }
    }
  }
}