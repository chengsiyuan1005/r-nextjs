// server.js
const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')
const devProxy = {
  '/api-mock': {
    target: 'https://mock.apifox.cn/m1/3421431-0-default', // apiFox mock
    pathRewrite: {
      '^/api-mock': '/'
    },
    changeOrigin: true
  },
  '/api': {
    target: 'http://127.0.0.1:3000/', // 端口自己配置合适的
    pathRewrite: {
      '^/api': '/'
    },
    changeOrigin: true
  }
}

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    if (dev && devProxy) {
      Object.keys(devProxy).forEach(function (context) {
        server.use(createProxyMiddleware(context, devProxy[context]))
      })
    }

    server.all('*', (req, res) => {
      handle(req, res)
    })

    server.listen(port, err => {
      if (err) {
        throw err
      }
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(err => {
    console.log(err)
  })
