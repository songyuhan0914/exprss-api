var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello  Express')
})
app.get('/ppp', function (req, res) {
  res.send('Hello  ppp')
})
app.get('/yuhan', function (req, res) {
  console.log('hello yuhan')
})

app.listen(3000,function(){
  console.log('running on port 3000...')
})
