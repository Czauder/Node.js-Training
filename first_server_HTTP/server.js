// example 1 
// const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html; charset=utf-8'
//     })
//     // res.write("<h1>Hello Cześć</h1>")
//     res.end(`
//     <h1>Dzień dobry</h1>
//     <script src="code.js"></script>
//     `)
// }).listen(3000, '127.0.0.1')





// example 2
// const http = require('http');

// const port = process.env.PORT || 3000;

// http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, {
//             'Content-type': 'text/html; charset=utf-8'
//         })
//         res.end('strona główna')
//     } else if (req.url === '/users') {
//         res.writeHead(200, {
//             'Content-type': 'text/html; charset=utf-8'
//         })
//         res.write('users!')
//         res.end()
//     } else {
//         res.writeHead(404, {'Content-type': 'text/html; charset=utf-8'})
//         res.end(`<h1>nie ma takiej storny ;( </h1>`)
//     }
// }).listen(port, '127.0.0.1', () => {
//     console.log(`nasz server nasłuchuje na porcie ${port}`)
// })



// example 3 
// const http = require('http');
// const fs = require('fs');
// const path = require('path')
// const port = process.env.PORT || 3000;

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-type': 'text/html; charset=utf-8'
//     })

//     const users = [{
//             name: "Adam",
//             id: 1
//         },
//         {
//             name: "Ewa",
//             id: 2
//         }
//     ]


//     switch (req.url) {
//         case '/':
//             fs.readFile(path.join(__dirname, "index.html"), (err, page) => {
//                 if (err) res.end(`<h1>nie udało się pobrać pliku</h1>`)
//                 else res.end(page)
//             })
//             break;
//         case '/users':
//             fs.readFile(path.join(__dirname, "users.html"), (err, page) => {
//                 if (err) res.end(`<h1>nie udało się pobrać pliku</h1>`)
//                 else res.end(page)
//             })
//             break;
//         case '/api/users':
//             res.writeHead(200, {
//                 'Content-type': 'application/json; charset=utf-8'
//             });
//             const usersJson = JSON.stringify(users);
//             res.end(usersJson)
//             break;

//         case '/code.js':
//             res.writeHead(200, {
//                 'Content-type': 'application/javascript; charset=utf-8'
//             });
//             fs.readFile(path.join(__dirname, "code.js"), (err, page) => {
//                 if (err) res.end(`<h1>nie udało się pobrać pliku</h1>`)
//                 else  res.end(page)
//             });
//             break;
//         default:
//             res.end("<h1>strona nie istnieje</h1>")
//     }
// }).listen(port, '127.0.0.1', () => {
//     console.log(`nasz serwer nasłuchuje na porcie ${port}`)
// });


// example 4  sync and async = in this exercise i used tool 'reload all tabs' for chrome.

const http = require('http');
const port = process.env.PORT || 3000;

let reqNumber = 0;


http.createServer((req, res) => {
    if (req.url === "/favicon.ico") {
        res.end();
        return;
    }

    reqNumber++
    for (let i = 0; i < 5000; i++) {
        console.log(reqNumber + "." + i)
    }

    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    })
    res.end(`Ilość requestów ${reqNumber}`)

}).listen(port, '127.0.0.1')