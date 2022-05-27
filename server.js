const express = require("express");
const {render} = require("ejs");
const app = express();
const port = 3000;
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render(__dirname+'/public/index.ejs')
})

app.use(express.static('public'));

app.get('/char', (req, res) => {
    res.render(__dirname+'/public/char.ejs')
})

app.use(express.static('public'));

app.get('/artifacts', (req, res) => {
    res.render(__dirname+'/public/artifacts.ejs')
})

app.use(express.static('public'));

app.get('/index', (req, res) => {
    res.render(__dirname+'/public/index.ejs')
})


app.listen(process.env.PORT || 3000)
    console.log(`App listening at http://localhost:${port}`
);
