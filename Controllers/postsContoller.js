
const arrayPosts = require("../Data/posts.js");


function index(req, res) {
// copiamo la logica dell'index

let filteredMenu = arrayPosts;

    if (req.query.tags) {
        filteredMenu = arrayposts.filter(
        posts => posts.tags.includes(req.query.tags)
);
}

        res.json(filteredMenu);
}

function show(req, res) {
// copiamo la logica della show

const id = parseInt(req.params.id)


    const dolce = arrayDolce.find(dolce => dolce.id === id);
    
    if(!dolce){

        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Dolce non trovaro"
        })
    }

        res.json(dolce);
}

function store(req, res) {

    res.send('Creazione di un nuovo post');
// copiamo la logica della store
}

function update(req, res) {
// copiamo la logica dell'update

    res.send(`Modifica itegrale del post ${req.params.id}`);
}

function patch(req, res) {
    // copiamo la logica dell'update
    
    res.send(`Modifica parziale del post ${req.params.id}`);   
}

function destroy(req, res) {

    const id = parseInt(req.params.id)


    const dolce = arrayDolce.find(dolce => dolce.id === id);
    
    if(!dolce){

        res.status(404);
        
        return res.json({
            error: "Not Found",
            message: "Dolce non trovaro"
        })
    }
    
    arrayPosts.splice(arrayPosts.indexOf(posts), 1);

    res.sendStatus(204)
// copiamo la logica della destroy..
}

// esportiamo tutto
module.exports = { index, show, store, update, patch, destroy }