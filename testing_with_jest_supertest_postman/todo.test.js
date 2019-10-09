const todo = require('./todo')


describe('list', () => {
    it('works', () => {
     const req = {};
     const res = {
         send: jest.fn(),
     };
     todo.list(req,res);

     expect(res.send).toHaveBeenCalledTimes(1);
     expect(res.send).toHaveBeenCalledWith('List')
    })
});

describe('create', () => {
    it('create', () => {

    })
});

describe('change', () => {
    it('change', () => {

    })
});

describe('delete', () => {
    it('delete', () => {

    })
});

describe('toggle', () => {
    it('toggle', () => {

    })
});