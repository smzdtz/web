module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        ws: true,
        pathRewrite: {
          "^/api": "/",
          //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
          //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
        },
        changeOrigin: true,
      },
      "/foo": {
        target: "<other_url>",
      },
    },
  },
};
