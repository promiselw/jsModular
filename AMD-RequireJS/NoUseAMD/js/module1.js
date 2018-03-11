


(function(window,MyAge) {

  let name = 'yangyang';

  function getName() {
    console.log('my name is '+name);
    console.log('---------外部module2执行结果--------');
    MyAge.getAge();
  }

  //暴露行为
  window.myName = {getName}
})(window,MyAge)
