
define(function() {
  let bookName = 'nodejs';

  function getBookname() {
    console.log('this book name is '+ bookName);
  }

  return {getBookname}

})