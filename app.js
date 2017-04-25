var server,
    port = process.env.PORT || 3000,
    express = require('express'),
    app = express(),
    routes = require('./lib/routes');
   
app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.set('view engine', 'ejs')

server = app.listen(port, function() {
    console.log('App listening on port 3000!')
})

var io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('a user connected');
 
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

var url = require('./lib/url')(io);