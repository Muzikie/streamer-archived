const supertest = require('supertest');
const app = require('../app');

jest.mock('../config/api', () => ({
  port: 4000,
  songs: {
    path: '../../../tests/songs/',
    extension: 'mp3'
  }
}));

describe('App', () => {
  describe('If API is up', () => {
    it('should return 200', (done) => {
      supertest(app)
        .get('/status/api')
        .expect(200, done);
    });

    it('should return 400 if any query parameter passed', () => supertest(app)
        .get('/status/api?foo=bar')
        .expect(400))
  });


  describe('Audio', () => {
    describe('Stream audio' ,() => {
      const validValue = 'cf434a889d6c7a064e8de61bb01759a76f585e5ff45a78ba8126ca332601f535';
      const invalidValue = 'invalid';

      it('should return 404 if endpoint does not exist', (done) => {
        supertest(app)
          .get(`/audio/${invalidValue}?publicKey=${validValue}`)
          .set('range', '0-10000')
          .expect(404, done);
      });

      it('should return 400 if audioID and publicKey are not a valid hash of length = 64', (done) => {
        supertest(app)
          .get(`/audio/${validValue}?publicKey=${invalidValue}`)
          .expect(400, done);
      });

      it('should return 206 if audioID and publicKey are a valid hash of length = 64', (done) => {
        supertest(app)
          .get(`/audio/${validValue}?publicKey=${validValue}`)
          .set('range', '0-10000')
          .expect(206, done);
      });
    });
  });
});
