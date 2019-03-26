
const express = require('express')
const basicAuth = require('basic-auth')
const app = express()
const admins = { admin: { password: 'admin' } }
auth = function (request, response, next) {
  var user = basicAuth(request)
  if (!user || !admins[user.name] || admins[user.name].password !== user.pass) {
    response.set('WWW-Authenticate', 'Basic realm="example"')
    return response.status(401).send()
  }
  return next()
}

app.use(auth)

app.get('/', function(req, res){
  var file = __dirname + '/file.txt';
  res.download(file); // Set disposition and send it.
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
