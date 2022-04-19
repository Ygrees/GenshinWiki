const express = require("express");
const app = express();
const port = 3000;

app.get('/',((req, res) => {
    res.sendFile(__dirname+'/index.html')
}))

app.get('/char',((req, res) => {
    res.sendFile(__dirname+'/char.html')
}))

/app.get('/',((req, res) => {
    res.sendFile(__dirname+'/index.html')
}))

app.get('/artifacts',((req, res) => {
    res.sendFile(__dirname+'/artifacts.html')
}))

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

