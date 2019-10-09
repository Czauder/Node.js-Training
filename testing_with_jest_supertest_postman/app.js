const express = require('express');

const todo = require('./todo')

const app = express()
 
app.set('x-powered-by', false)

// GET /
// POST /
// PUT /:id
// DELETE /:id
// POST /:id/toggle

app.get('/', todo.list)

app.post('/', todo.create)

app.put('/:id', todo.change)

app.delete('/:id', todo.delete)

app.post('/:id/toggle', todo.toggle)

app.get('*', (res,req) => {
  res.status(404)
  res.send('not found')
})

app.use((err, req, res, next) => {
res.status(500)
res.send('We have encountered an error and we were notified about it. We will try to fix it as soon as possible')
})
const port = process.env.PORT || 3000;

exports.app = app;