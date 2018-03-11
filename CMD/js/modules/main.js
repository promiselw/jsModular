define(function(require ) {
  let module1 = require('./module1');
  let module3 = require('./module3');
  let jQ = require('../libs/jquery');

  console.log(jQ);

  jQ('body').css('background-color','red')
  module1.getBookname();
  module3.getBookauthor();
})