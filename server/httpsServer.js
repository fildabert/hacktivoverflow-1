const https = require('https')
const path = require('path')
const fs = require('fs')

const app = require('./app')

const option = {
  cert: fs.readFileSync('/etc/letsencrypt/live/hacktivgun-server.fildabert.com/cert.pem', 'utf8'),
  key: fs.readFileSync('/etc/letsencrypt/live/hacktivgun-server.fildabert.com/privkey.pem', 'utf8'),
  ca: fs.readFileSync('/etc/letsencrypt/live/hacktivgun-server.fildabert.com/chain.pem', 'utf8')
}


const server = https.createServer(option, app)

server.listen(443, () => {
  console.log('server secure has started')
})



