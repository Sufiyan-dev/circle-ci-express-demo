const  express = require('express');

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
const server = app.listen(PORT, () =>
    console.log(`App listening to http://localhost:${PORT}`)
);

// Method to close the server gracefully
close = function() {
    return new Promise((resolve, reject) => {
      server.close((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
};

module.exports = { app, close};