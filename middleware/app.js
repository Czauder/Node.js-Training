const express = require('express');
const path = require('path');
const coookieParser = require('cookie-parser')
const app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000, () => {
    console.log('server is listening at http://localhost:3000');
})

app.use(express.json())
app.use(express.static(
    path.join(__dirname, 'static')
));
app.use(coookieParser())

app.get('/', (req, res) => {

    res.send("strona główna");
    res.end()
})

app.post('/hello', (req, res) => {

console.log(req.body)

const {name, surname} = req.body;

res.send( `Witaj ${name} ${surname}`);
})


// app.get('/', (req, res) => {
    
//     const fileName = 'index.html';

//     res.sendFile( fileName, {
//         root: path.join(__dirname, 'static'),
//     });

// })

app.get('/', (res,req) => {

    const { visitator_name } = req.cookies;
    console.log(req.cookies);

    if (visitator_name) {
        res.send(`hello, ${visitator_name}`);
    } else {
        res.send('who you are? :)')
    }
})

app.get('/hi/:name', (req,res)=> {
    const {name} = req.params;

    res.cookie('visitator_name', name, {
        maxAge: 5 * 60 * 1000,
    });

    res.send('Saved name.')
})
