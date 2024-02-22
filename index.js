const express = require('express');

const app = express();

// req input phraser
app.use(express.json());

app.get('/wassup', (req, res) => {
    res.send('Wasssup!');
});

app.get('/Hello', (req, res) => {
    res.send('Helloooo');
});

app.get('/', (req, res) => {
    res.send('Hey');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    logger.info(`App listening to http://localhost:${PORT}`)
);