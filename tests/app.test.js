const supertest = require('supertest');
const app = require('../app');

describe('App', () => {
  describe('If API is up', () => {
    it('should return 200', (done) => {
      supertest(app)
        .get('/status/api')
        .expect(200, done);
    });
  });


  describe('Audio', () => {
    describe('Stream audio' ,() => {
      it('should return 404 if song does not exist', (done) => {
        supertest(app)
          .get('/audio/stream/doesnotexist')
          .expect(404, done);
      });
    });
  });
});
