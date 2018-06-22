import * as express from 'express';
import { render } from './loader';

const app = express();
const port = 3000;

app.use(express.static('dist'));
app.use(render as any);

app.listen(3000, () => {
  // tslint:disable-next-line:no-console
  console.log(`Running on http://localhost:${port}/`);
});

app.on('error', (error: any) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      // tslint:disable-next-line:no-console
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      // tslint:disable-next-line:no-console
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});
