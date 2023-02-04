import app from '@/app';
import '@/config/envs';

const port = process.env.PORT;

app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Listening on port ${port}`);
});

process.on('unhandledRejection', (reason) => {
// eslint-disable-next-line no-console
  console.error(reason);
});

process.on('uncaughtException', (err) => {
// eslint-disable-next-line no-console
  console.error('uncaughtException', JSON.stringify(err));
});