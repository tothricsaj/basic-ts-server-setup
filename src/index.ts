import express, { Request, Response } from 'express';

const app = express();
const port = 5000;

app.get('/', (req: Request, res: Response) => {
  res.json({ greeting: 'Hello Nodejs with TS!' });
});

app.listen(port, () => {
  console.log(`🚀 server started at http://localhost:${port}`);
});