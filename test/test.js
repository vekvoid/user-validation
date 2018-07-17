const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const CONFIG = require('../config/config');

const url = `http://${CONFIG.host}:${CONFIG.port}`;

chai.use(chaiHttp);

mocha.describe('API endpoint /v1/user/validateUsername', function testing() {
  this.timeout(5000);

  before(() => {

  });

  after(() => {

  });

  it('should return username existance', () => chai.request(url)
    .post('/v1/user/validateUsername')
    .send({ username: 'tEst' })
    .then((res) => {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.an('object');
      expect(res.body.meta.error).to.equal('');
      expect(res.body.data.found).to.equal(true);
    }));
});

mocha.describe('API endpoint /v1/user/validateUserPassword', function testing() {
  this.timeout(5000);

  before(() => {

  });

  after(() => {

  });

  it('should return username/password match', () => chai.request(url)
    .post('/v1/user/validateUserPassword')
    .send({ username: 'tEst', password: 'password' })
    .then((res) => {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.an('object');
      expect(res.body.meta.error).to.equal('');
      expect(res.body.data.found).to.equal(true);
    }));

  it('should return username/password NOT match validating case sensitive', () => chai.request(url)
    .post('/v1/user/validateUserPassword')
    .send({ username: 'test', password: 'Password' })
    .then((res) => {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.an('object');
      expect(res.body.meta.error).to.equal('');
      expect(res.body.data.found).to.equal(false);
    }));

  it('should return username/password NOT match validating empty password', () => chai.request(url)
    .post('/v1/user/validateUserPassword')
    .send({ username: 'test' })
    .then((res) => {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.an('object');
      expect(res.body.meta.error).to.equal('');
      expect(res.body.data.found).to.equal(false);
    }));
});
