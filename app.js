
const express = require('express');
const app = express();
const port = 4000;

const postRoutes = require('./Routers/posts');

app.use(express.json())

app.use(express.static('public'))


app.use('/api/posts', postRoutes);


app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

app.listen(port, () =>{
    console.log(`prova del server ${port}`)
})