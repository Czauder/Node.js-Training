const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("server is listening at http://localhost:3000");
})

// app.get('/', (req) => {
//     console.log('Spis ludzi')
//     console.log(req.get('Referer'))

//     const {
//         name,
//         surname
//     } = req.query;

//     console.log(`Hello ${name}${surname}`)
// })

app.get('/:id', (req) => {
    console.log("Informacja szczegółowa na temant osoby o ID 1" + req.params)
})

app.post('/', (req) => {
    console.log("Dodawanie nowej osoby")
})

app.patch('/:id', (req) => {
    console.log("akutalizacja osoby z ID 1"  + req.params)
})

app.delete('/:id', (req) => {
    console.log("Usunięcie osoby z ID 1"  + req.params)
})

app.get('/hello/:name', (req) => {

    console.log('Hello, ' + req.params.name)
})

app.get('/article/:id/:title?', (req) => {

    console.log(req.params)
})