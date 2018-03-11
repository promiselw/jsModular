

(function(window) {

  let name = 'yangyang';

  function getName() {
    console.log('module2 name is' + name);
  }

  //暴露行为
  window.myModule2 = {getName};

})(window);

