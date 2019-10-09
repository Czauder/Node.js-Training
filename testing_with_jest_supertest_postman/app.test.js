const request = require('supertest')

const {
  app
} = require('./app');


it('works', async () => {
  const response = await request(app).get('/');
  expect(response.status).toEqual(200);
})

it('hanldes pages are no found', async () => {
  const response = await request(app).get('/whatever');

  expect(response.status).toEqual(404);
  expect(response.text).toEqual('Not found')
})


