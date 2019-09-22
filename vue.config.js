module.exports = {
  publicPath: 'dhsmovie',
  devServer: {
    proxy: {
      '/api2': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true,
      },
      '/api': {
        target: 'http://39.97.33.178',
        ws: true,
        changeOrigin: true
      }
    }
  }
}