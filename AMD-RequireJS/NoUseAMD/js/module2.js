

(function(window) {
    let age = 18;

    function getAge() {
      console.log('my age is '+age);
    }

    //暴露行为
    window.MyAge = {getAge};

})(window);
