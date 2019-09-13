const fs = require('fs')
const colors = require('colors');


const handleData = (type, title) => {
    // type - number (1 - add; 2 - remove; 3 - list)
    // title (string || null)
    const data = fs.readFileSync('datadb.json');
    // let data = fs.readFileSync('datadb.json');
    // data = data.toString()
    let tasks = JSON.parse(data);
    console.log(tasks);

    if (type === 1 || type === 2) {
        const isExisted = tasks.find(task => task.title === title) ? true : false;
        if (type === 1 && isExisted) {
            return console.log("takie zadanie już istnieje".red);
        } else if (type === 2 && !isExisted) {
            return console.log("nie moge usunąc zadania, które nie istnieje".red);
        }
    }


    let dataJSON = ""
    switch (type) {
        case 1:
            tasks = tasks.map((task, index) => ({id: index + 1, title: task.title}));
            const id = tasks.length + 1;
            tasks.push({
                id,
                title
            })
            // console.log(tasks);
            dataJSON = JSON.stringify(tasks)
            // console.log(dataJSON)
            fs.writeFileSync('datadb.json', dataJSON);
            console.log(`dodaje zdanie ${title}`.red.bgWhite)
            break;

        case 2:
            const index = tasks.findIndex(task => task.title === title);
            tasks.splice(index, 1);
            console.log(tasks);
            dataJSON = JSON.stringify(tasks)
            fs.writeFile('datadb.json', dataJSON, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Zadanie ${title} zostało usunięte`.white.bgBlue)
            })
            break;

        case 3:
            console.log(`Lista zadań do zrobienia obejmuje ${tasks.length} pozycji. Do zrobienia masz:`);
            if (tasks.length) {
                tasks.forEach((task, index) => {
                    if (index % 2) return console.log(task.title.rainbow);
                    return console.log(task.title.blue);
                })
            }
            break;
    }
};


module.exports = handleData