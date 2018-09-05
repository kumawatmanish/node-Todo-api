const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {ToDo} = require('./../model/todo');

beforeEach((done) => {
    ToDo.remove({}).then(() => done());
});
describe('POST /todo', () => {
    it('shouls create a new todo', () => {
        var text = 'test todo text';
        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text)
        })
        .end((err,res) => {
            if(err)
              return document(err);
            ToDo.find().then((todo), () => {
                expect(todo.length).toBe(1);
                expect(todo[0].text).toBe(text);
                done();
            }).catch((e) =>  done(e));  
        })
    });

    it('shouls create a new todo', () => {
        var text = 'test todo text';
        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text)
        })
        .end((err,res) => {
            if(err)
              return document(err);
        })
    } );
    
});
