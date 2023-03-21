//1

describe("describe", function() {
    it('test', function() {
    });
  })

//2-4

let {assert} = chai;

describe("validateEmail", function() {
    describe('valid string', function(){
      it('not an empty string', function() {
        assert.equal(validateEmail(''), false);
      });
      it('String length less than 5', function() {
        assert.equal(validateEmail('email@gmail.com'), false);
      });
      it('typeof string', function() {
        assert.equal(validateEmail(222), false, 'number error');
        assert.equal(validateEmail(true), false, 'boolean error');
        assert.equal(validateEmail({}), false, 'object error');
      });
      it('not all spaces', function() {
        assert.equal(validateEmail('     '), false);
      });
    });
    describe('valid data', function(){
      it('Don\'t have the @ or @ the first character', function(){
        assert.isFalse(validateEmail('emailgmail.com'), 'Don\'t have the @');
        assert.isFalse(validateEmail('@emailgmail.com'), '@ the first character')
      });
      it('String has only one symbol @', function () {
        assert.equal(validateEmail('email@gma@il.com'), false);
      });
      it('String has symbol . after @', function() {
        assert.equal(validateEmail('e.m@gmail.com'), true);
        assert.equal(validateEmail('e.mail@gmailcom'), false);
        assert.equal(validateEmail('e.mail.@gmail.com'), false);
      })
    })
})
  
  