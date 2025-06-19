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

## Deploying Online

You can host Whirl on a platform like [Render](https://render.com) to make the
chat accessible from anywhere:

1. Push this repository to a Git hosting service such as GitHub.
2. Sign up at [Render](https://render.com) and create a **Web Service**.
3. Select your repository and use the following settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Render will automatically build and deploy the server. Once deployment
   finishes, the application will be available at the URL provided by Render.

The same Docker image can also be deployed to other container platforms if you
prefer running the service elsewhere.
