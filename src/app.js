const express = require('express');
const router = require("./routes");
const cookieParser = require('cookie-parser');

require("dotenv").config();

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(router);


app.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`);
});