import express from 'express';
import { GetMyImage } from './routes/getMyImage';

const app = express();
const port: number = 1234;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send(`Use http://localhost:1234/GetMyImage?image=yourImageName&&width=yourSize&&height=yourSize 
to get your desired image with the desired size`);
});

app.use('/GetMyImage', GetMyImage);

app.listen(port, () =>
  console.log(`Server is running on http://localhost:1234`)
);

export default app;
