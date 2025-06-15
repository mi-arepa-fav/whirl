const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

// queue of waiting users
let waiting = null;

io.on('connection', socket => {
  console.log('user connected', socket.id);

  if (waiting) {
    // pair with waiting user
    const partner = waiting;
    waiting = null;
    socket.partner = partner;
    partner.partner = socket;
    socket.emit('match');
    partner.emit('match');
  } else {
    waiting = socket;
  }

  socket.on('message', msg => {
    if (socket.partner) {
      socket.partner.emit('message', msg);
    }
  });

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
    if (waiting === socket) {
      waiting = null;
    }
    if (socket.partner) {
      socket.partner.emit('partner-disconnected');
      socket.partner.partner = null;
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
