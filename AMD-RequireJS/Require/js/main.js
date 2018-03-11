

//配置
(function() {

  require.config({
    //基本路径
    baseUrl: 'js/',
    //映射: 模块标识名: 路径
    paths: {
      //自定义模块
      'Fmodule': 'modules/module1',
      'Smodule': 'modules/module2',

      //库模块
      'jquery': 'libs/jquery-1.10.1',
      'angular': 'libs/angular'

    },

    //配置不兼容AMD的模块
    shim: {
      angular: {
        exports: 'angular'
      }
    }
  })

  //引入模块使用
  require(['Fmodule', 'angular'], function (Fmodule, angular) {
    Fmodule.getPublish();
    console.log(angular);
  })
})()