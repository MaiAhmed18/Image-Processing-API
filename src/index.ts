import express from 'express';
import routes from './routes/index';
import FileHandling from './fileHandling';

const app: express.Application = express();
const port: number = 5000;

app.use('/api', routes);
app.listen(port, async (): Promise<void> => {
  await FileHandling.checkThumb();
  console.log(`listening to port ${port}`);
});

export default app;
