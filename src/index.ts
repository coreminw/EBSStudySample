import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;
const VERSION = process.env.VERSION || '1.0.0';

app.get('/', (req, res) => {
    res.send({ version: VERSION });
})

app.get('/new_page', (req, res) => {
    res.send({text : "It's new page!"});
})

app.get('/new', (req, res) => {
    res.send({text : "ในใ๋๋ค;;"});
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));