const express = require('express');
const router = require("./routes");
const cookieParser = require('cookie-parser');
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`);
});
