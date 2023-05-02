const express = require('express');
const path = require('path');
//Use of Path: It is help to access(Path) the folder in Project.


const app = express();
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));
//This static method actually helps to load static pages,content.

app.listen(5000);