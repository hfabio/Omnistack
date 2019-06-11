const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const routes = express.Router();

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');
const upload = multer(uploadConfig);

routes.get('/posts', PostController.index); //http://localhost://3333/posts

routes.post('/posts', upload.single('image'), PostController.store); //http://localhost://3333/posts

routes.post('/posts/:id/like', LikeController.store); //http://localhost://3333/posts


module.exports = routes;