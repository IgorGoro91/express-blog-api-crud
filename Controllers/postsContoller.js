
const posts = require("../Data/posts.js");


function index(req, res) {
// copiamo la logica dell'index

let filteredMenu = posts;

    if (req.query.tags) {
        filteredMenu = posts.filter(post => {
        return post.tags.includes(req.query.tags)}
);
}

        res.json(filteredMenu);
}






function show(req, res) {
// copiamo la logica della show

const id = parseInt(req.params.id)


    const post = posts.find(post => post.id === id);
    
    if(!post){

        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Dolce non trovaro"
        })
    }

        res.json(post);
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


    const post = posts.find(post => post.id === id);
    
    if(!post){

        res.status(404);
        
        return res.json({
            error: "Not Found",
            message: "Dolce non trovaro"
        })
    }
    
    posts.splice(posts.indexOf(posts), 1);

    res.sendStatus(204)
    
// copiamo la logica della destroy..
}


// esportiamo tutto
module.exports = { index, show, store, update, patch, destroy };