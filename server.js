var http = require('http')
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end('<h1>Hi there!</h1>' + 'This is the <strong>Home.</strong>')
  } else if (request.url === '/random-joke') {
    var randomNumber = Math.random()
    if (randomNumber > 0.6) {
      response.end('<a href="/">Home</a>' + '<h1>Hey, welcome to jokes garden!</h1>' + 'How can you tell you have a really bad case of acne?' + '<p> --- It’s when the blind try to read your face.</p>')
    } else if (randomNumber > 0.3) {
      response.end('<a href="/">Home</a>' + '<h1>Hey, jokes again!</h1>' + 'Can a kangaroo jump higher than a house?' + '<p> --- Of course, a house doesn’t jump at all.</p>')
    } else {
      response.end('<a href="/">Home</a>' + '<h1>Hey, jokes again!</h1>' + 'Of course I should clean my windows.' + '<p> --- But privacy is important too.')
    }
  } else if (request.url === '/cuteness') {
    response.end('<a href="/">Home</a>' + '<h1>Cuteness</h1>' + '<img src="http://www.beautifulshare.com/wp-content/uploads/2016/09/3-210.jpg" alt="Cutest Owl Ever">')
  } else {
    response.end('<a href="/">Home</a>' + '<h1>404 Error. Page Not Found!</h1>' + 'The requested URL ' + '<strong>' + request.url + '</strong>' + ' was not found on this server.' + '<p>That’s all we know.</p>')
  }
})

var port = process.env.PORT || 8080
server.listen(port)
console.log('Server running at http://localhost:' + port + '/')
