const todo = require('./todo');

let req;
let res;

beforeEach(() => {
    req = {};
    res = {
        json: jest.fn(),
    };
    next = jest.js();
})


describe('list', () => {
    it('works', () => {
        todo.list(req, res);

        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith([{
                id: 1,
                name: 'Dinner',
                done: false
            },
            {
                id: 2,
                name: 'Dinner',
                done: false
            }
        ]);
    })
});

describe('create', () => {
    it('works', () => {
        req.body = {
            name: 'Lunch',
        }
        todo.create(req, res, next);

        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith('Create: Lunch');
    })

    it('handles missing body', () => {
        todo.create(req, res, next);
   
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(new Error('Name is missing'));
        expect(res.json).not.toHaveBeenCalledTimes();
    });

    it('handles missing name in the body', () => {
        req.body = {}
        todo.create(req, res, next);
   
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(new Error('Name is missing'));
        expect(res.json).not.toHaveBeenCalledTimes();
    });

    it('handles an empty name', () => {
        req.body = { name: '' }
        todo.create(req, res, next);
   
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(new Error('Name should not be empty'));
        expect(res.json).not.toHaveBeenCalledTimes();
    });
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