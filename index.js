const express = require('express');
const app = express();
app.listen(3000);

app.use(express.static('./assests'));
app.get('/', (rer, res) => {
    res.sendFile(__dirname + '/index.html');

});
app.get('/blog', (rer, res) => {
    res.sendFile(__dirname + '//view/blog.html');

});
app.get('/contact', (rer, res) => {
    res.sendFile(__dirname + '/view/contact.html');

});
app.get('/about', (rer, res) => {
    res.sendFile(__dirname + '/view/about.html');

});
app.get('/login', (rer, res) => {
    res.sendFile(__dirname + '/view/login.html');

});
app.get('/services', (rer, res) => {
    res.sendFile(__dirname + '/view/services.html');

});
app.get('/admin?role=admin', (req, res) => {
    if (req.url.includes("/admin?role=admin")) {
        res.sendFile(__dirname + '/view/hi.html');
    } else
        res.sendFile(__dirname + '/view/error.html');



});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/view/error.html');
    console.log(res.url);

})