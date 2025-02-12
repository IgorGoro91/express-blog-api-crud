
const express = require('express');
const router = express.Router();

const arrayPosts = require("../Data/posts.js")




router.get('/', (req, res) => {

    res.json(arrayPosts);
    // res.send('Lista dei post');
});


router.get('/:id', (req, res) => {
    
    res.send(`Dettaglio del post ${req.params.id}`);
});


router.post('/', (req, res) => {
    res.send('Creazione di un nuovo post');
});


router.put('/:id', (req, res) => {
    
    res.send(`Modifica itegrale del post ${req.params.id}`);
});


router.patch('/:id', (req, res) => {
    
    res.send(`Modifica parziale del post ${req.params.id}`);
});


router.delete('/:id', (req, res) => {
    
    res.send(`Cancellazione del post ${req.params.id}`);
});

module.exports = router;