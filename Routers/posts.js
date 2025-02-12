
const express = require('express');
const router = express.Router();

const arrayPosts = require("../Data/posts.js");


const postController = require("../Controllers/postsContoller.js")


router.get('/', postController.index);


router.get('/:id', postController.show);


router.post('/', postController.store);


router.put('/:id', postController.update);


router.patch('/:id', postController.pach);


router.delete('/:id', postController.destroy);

module.exports = router;