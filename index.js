const express = require('express');
const app = express();
app.listen(3000);

app.use(express.static('./assests'));
app.get('/', (rer, res) => {
    res.sendFile(__dirname + '/index.html');

});
app.use(express.static('./assests'));
app.get('/blog', (rer, res) => {
    res.sendFile(__dirname + '//view/blog.html');

});
app.use(express.static('./assests'));
app.get('/contact', (rer, res) => {
    res.sendFile(__dirname + '/view/contact.html');

});
app.use(express.static('./assests'));
app.get('/about', (rer, res) => {
    res.sendFile(__dirname + '/view/about.html');

});
app.use(express.static('./assests'));
app.get('/login', (rer, res) => {
    res.sendFile(__dirname + '/view/login.html');

});
app.use(express.static('./assests'));
app.get('/login', (rer, res) => {
    res.sendFile(__dirname + '/view/services.html');

});