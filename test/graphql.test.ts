/* tslint:disable:no-console*/
/* tslint:disable:no-unused-expression*/
import request = require('supertest');
import {server} from './../src/index';

const result: {data: {hi: string; }; } = {data: {hi: 'hi'}};

describe('Graphql test', () => {
  afterAll(() => {
    server.close();
  });

  it('Get Hi, content-type application/json', (done: jest.DoneCallback) => {
    request(server)
      .post('/graphql')
      .set('Content-Type', 'application/json; charset=UTF-8')
      .send({query: '{hi}'})
      .expect(200)
      .end((err, res: request.Response) => {
        expect(err).toBeNull();
        expect(res.body).toEqual(result);
        // res.body.should.to.deep.equal(result);
        done();
    });
  });
  xit('Get Hi, content-type application/graphql', (done: jest.DoneCallback) => {
    request(server)
      .post('/graphql')
      .set('Content-Type', 'application/graphql; charset=UTF-8')
      .send('{hi}')
      .expect(200)
      .end((err, res: request.Response) => {
        expect(err).toBeNull();
        expect(res.body).toEqual(result);
        // res.body.should.to.deep.equal(result);
        done();
    });
  });
});
