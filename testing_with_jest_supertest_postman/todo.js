 const todos = [{
         id: 1,
         name: 'Dinner',
         done: false
     },
     {
         id: 2,
         name: 'Dinner',
         done: false
     }
 ];


 exports.list = (req, res) => {
     res.send(todos)
 };

 exports.create = (req, res) => {
     res.send('Created')
 };

 exports.change = (req, res) => {
     res.send(`Change: ${req.params.id}`)
 };

 exports.delete = (req, res) => {};

 exports.toggle = (req, res) => {
     res.send(`Toogle: ${req.params.id}`)
 };