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
     res.json(todos)
 };

 exports.create = (req, res, next) => {
     if(req.body && req.body.name) {
     console.log(req.body)
     res.json(`Created: ${req.body.name}`)
     } else {
         next(new Error('Name is missing'))
     }
 };

 exports.change = (req, res) => {
     res.json(`Change: ${req.params.id}`)
 };

 exports.delete = (req, res) => {};

 exports.toggle = (req, res) => {
     res.json(`Toogle: ${req.params.id}`)
 };