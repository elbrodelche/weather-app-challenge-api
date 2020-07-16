import app from './app';

const port = process.env.NODE_PORT || 3000;
const server = app.listen(port);
console.info(`Listening to http://localhost:${port} 🚀`);

export default server;
