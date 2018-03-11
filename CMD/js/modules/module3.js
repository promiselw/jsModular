
define(function(require,exports,module) {

  var module2 = require('./module2');

  var bookauthor = 'XXXX'
  console.log('----------------------');
  console.log(module2.bookPub);

  function getBookauthor() {
    console.log('this book\'s author is '+bookauthor);
  }

  exports.getBookauthor = getBookauthor;


})