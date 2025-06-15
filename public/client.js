const socket = io();

const messages = document.getElementById('messages');
const input = document.getElementById('input');
const form = document.getElementById('form');
const status = document.getElementById('status');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (input.value && status.textContent === 'Connected') {
    socket.emit('message', input.value);
    addMessage(`You: ${input.value}`);
    input.value = '';
  }
});

function addMessage(text) {
  const item = document.createElement('li');
  item.textContent = text;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
}

socket.on('match', () => {
  status.textContent = 'Connected';
});

socket.on('message', msg => {
  addMessage(`Stranger: ${msg}`);
});

socket.on('partner-disconnected', () => {
  status.textContent = 'Waiting for partner...';
  addMessage('Partner disconnected');
});

status.textContent = 'Waiting for partner...';
