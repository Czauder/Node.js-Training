const express = require("express");
const path = require('path')

const app = express();

app.listen(3000, () => {
    console.log("server is listening at http://localhost:3001");
})

app.get('/', (req, res) => {

    res.send(`<!DOCTYPE html>'
<html>
<body>
<img src="/logo">
</body>
</html>`)
   res.end()
})

app.get('/logo', (req, res) => {

    const fileName = 'static/plik.jpg';

    console.log(path.join(__dirname, 'static'));

    res.sendFile(fileName, {
        root: path.join(__dirname, 'static/plik.jpg')
    })

})