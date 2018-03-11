

let module1 = require('./modules/module1');
let module2 = require('./modules/module2');
let module3 = require('./modules/module3');
let uniq = require('uniq');

module1.getName();
module2();
module3.getAge();

var arr = [1,2,1,3,4,3,5,2];

//数组去重
console.log(uniq(arr));

