(function() {
  console.time('Application bootstrapped');

  require([

    'config/bower',
    'config/app',
    'config/routes'

  ], function() {

    angular.element(document).ready(function() {
      angular.bootstrap(document, ['app']);
      console.timeEnd('Application bootstrapped');
    });

  });

})();
