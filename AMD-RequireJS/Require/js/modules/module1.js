define(['Smodule','jquery'],function(Smodule,$) {

  let bookPublisher = '机械工业出版社';
  function getPublish() {
    console.log('this book\'s publish is'+bookPublisher);
    $('body').css('background-color','brown');
    $('.content').css('background-color','orange')
  }

  Smodule.getBookname();

  return {getPublish}

})