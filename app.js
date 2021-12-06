const express = require('express');
const app = express();
app.use(express.static('static'))
console.log('hello')
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index')
})
app.listen(2000)