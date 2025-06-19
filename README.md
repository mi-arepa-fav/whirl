# Whirl

Whirl is a simple Omegle-like chat application that pairs random users for
one-on-one conversations. It uses Node.js with Express and Socket.io for
realtime communication.

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the server:
   ```sh
   npm start
   ```
3. Open `http://localhost:3000` in your browser.

Users will be automatically matched with a stranger when another user
connects. Type messages and press **Send** to chat. When a partner
disconnects, the page waits for a new connection.

## Docker

To build and run the server in a Docker container:

```sh
docker build -t whirl .
docker run -p 3000:3000 whirl
```

The service will be available at `http://localhost:3000`.
