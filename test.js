/* eslint-disable strict*/
/* eslint-disable no-unused-expressions*/
/* eslint no-unused-vars: [1] */

'use strict';

const it = require('mocha').it;
const describe = require('mocha').describe;
const before = require('mocha').before;
const after = require('mocha').after;
const beforeEach = require('mocha').beforeEach;
const afterEach = require('mocha').afterEach;
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const should = require('chai').should;
const fork = require('child_process').fork;

describe('test emotion functions', () => {
  let child;
  let nightmare;
  before((done) => {
    child = fork('./server.js');
    child.on('message', (msg) => {
      if (msg === 'listening') {
        done();
      }
    });
    // have the test server listen on a given port
    // server.listen(8080, done);
  });

  after(() => {
    child.kill();
  });

  // before each test,
  beforeEach(() => {
    // create a new nightmare instance
    nightmare = Nightmare({ show: true });
  });

  // after each test,
  afterEach(function* () {
    // end the nightmare instance
    yield nightmare.end();
  });
  it('点击按钮后表情展开表情框, 点击关闭按钮后表情框消失', function* () {
    let exists = yield nightmare
      .goto('http://127.0.0.1:8080')
      .wait(1000)
      .click('#item5')
      .exists('#toggleWindow');
    exists.should.be.true;

    exists = yield nightmare
      .wait(1000)
      .click('#closeEM')
      .exists('#toggleWindow');
    exists.should.be.false;
  });

  it('点击按钮, 出现表情后, 点击表情, 输入框输出文字', (done) => {
    nightmare
      .goto('http://gulp.nekohand.moe/KF-Emotion-UserScript/')
      .wait(1000)
      .click('#item3')
      .wait('#toggleWindow')
      .wait('#eddie32item3')
      .click('#eddie32item3 > div:nth-child(1)')
      .wait(1000)
      .evaluate(() => {
        const elem = document.querySelector('textarea');
        return elem.value;
      })
      .end()
      .then((text) => {
        expect(text).to.equal(`[img]${text}[/img]`);
        done();
      });
  });
});
