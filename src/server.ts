import express from 'express';
import routes from './routes/index';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Application up and running on ${PORT}`));
