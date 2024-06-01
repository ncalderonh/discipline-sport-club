import express from 'express';
import axios from 'axios';
import routes from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("assets"));

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto http://localhost:${PORT}`)
});