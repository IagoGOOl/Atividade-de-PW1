import express from 'express';

import { technologieRouter } from './route/technologieRoute';
import { userRoute } from './route/userRoute';

const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/technologies', technologieRouter);
app.use('/users', userRoute);

app.listen(PORT, () => console.log(`Server is Running on port: ${PORT}`));
