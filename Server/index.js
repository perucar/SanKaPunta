import express from  'express';
import bodyParser from 'body-parser';

import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World");
});

// npm start
app.listen(PORT, () => {console.log(`Server Listen to port httm://localhost:${PORT}`)});