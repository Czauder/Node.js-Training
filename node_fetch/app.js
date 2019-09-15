// // http://numbersapi.com/2012/random/year?json

// ZADANIE 1

// const fetch = require('node-fetch');

// const year = process.argv[2] || Math.floor(Math.random() * 2020);
// // console.log(year);


// fetch(`http://numbersapi.com/${year}/year?json`)
//     .then(response => response.json())
//     .then(data => console.log(data.text))
//     .catch(error => console.log('awaria', error));


// // ZADANIE 2
// const fetch = require('node-fetch');

//  // `http://numbersapi.com/${number}/${type}/type?json`

// //  console.log(process.argv)

//  const arg = process.argv[2];
//  let type = ''

// if(arg.indexOf('--year') === 0) {
//     console.log('szukamy info o roku...');
//     type: 'year';
// } else if (arg.indexOf('--math') === 0) {
//     console.log('szukamy info liczby...');
//     type: 'math';
// }  else if (arg.indexOf('--trivia') === 0) {
//     console.log('szukamy ciekawostki liczby...');
//     type: 'trivia';
// }


// const equalSign = arg.search('=');
// // console.log(equalSign)
// if(equalSign === -1 ) console.log('nie wpisałeś liczby');

// const number = arg.slice(equalSign + 1) || 1;
// // console.log(number)


// if (number === "" || isNaN(Number(number))) {
//  console.log("to nie jest liczba!");
//  process.exit()
// }

// fetch(`http://numbersapi.com/${number}/${type}?json`)
// .then(response => {
//     if(response.ok){
//         return response.json()
//     } else {
//         throw new Error("aaaaaaaaaawariaaaa: " + response.status)
//     }
// })
// .then(response => console.log(response.text))
// .catch(error => console.log("awaria", error))


// ZADANIE 3 // NBP API - REQUEST
// `http://api.nbp.pl/api/exchangerates/rates/a/${code}/`

const request = require('request');
const fs = require('fs')

const validCodes = ['usd', 'eur', 'gbp', 'chf'];

const code = process.argv[2]

const isValid = validCodes.find(currency => currency === code) ? true : false;
if (!isValid) process.exit();
console.log(isValid)

const url = `http://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`

request(url, {
    json: true
}, (err, response, body) => {
    if (err) {
        return console.log("aaawarriaaaa", err);
    };
    if (response.statusCode !== 200) {
        return console.log("coś nie tak poszło, sprawdź url")
    };
    const message = `średnia cena ${body.currency} w dniu ${body.rates[0].effectiveDate} wynosi ${body.rates[0].mid} złotych`;

   fs.appendFile('currencies.txt', message + '\n', (err) => {
       console.log("dane dodane do pliku");
   })

    console.log(message);
})