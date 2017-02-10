'use strict';

let Nightmare = require('nightmare');
let expect = require('chai').expect;
let should = require('chai').should();
let fork = require('child_process').fork;

describe('test emotion functions',function(){
  let child;
  let nightmare;
  before(function (done){
    child = fork('./server.js');
    child.on('message',function(msg){
      if(msg === 'listening'){
        done();
      }
    });
    //have the test server listen on a given port
    //server.listen(8080, done);
  });

  after(function(){
    child.kill();
  });

  //before each test,
  beforeEach(function(){
    //create a new nightmare instance
    nightmare = Nightmare({ show:true });
  });

  //after each test,
  afterEach(function *(){
    //end the nightmare instance
    yield nightmare.end();
  })
  it('点击按钮后表情展开表情框, 点击关闭按钮后表情框消失',function *(){

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

  it('点击按钮, 出现表情后, 点击表情, 输入框输出文字', function(done){
    nightmare
      .goto('http://gulp.nekohand.moe/KF-Emotion-UserScript/')
      .wait(1000)
      .click('#item3')
      .wait('#toggleWindow')
      .wait('#eddie32item3')
      .click('#eddie32item3 > div:nth-child(1)')
      .wait(1000)
      .evaluate(function(){
        elem = document.querySelector('textarea');
        return elem.value;
      })
      .end()
      .then(function(text){
        expect(text).to.equal(`[img]${text}[/img]`);
        done();
      })
  })

});
