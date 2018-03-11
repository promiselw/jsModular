

(function(window,myModule2) {

  let age = 18;

  function getMessage() {
    myModule2.getName();
    console.log('module1 age is ' + age);
    getNum();
  }

  function getNum() {
    console.log('my phone is 156135456');
  }

  //向外暴露行为
  window.myModule1 = {getMessage}

})(window,myModule2)
