const gateway = require('fast-gateway')
const server = gateway({
  routes: [{
    prefix: '/tigo',
    target: 'http://tigo:3001'
  }]
})

server.start(8080);