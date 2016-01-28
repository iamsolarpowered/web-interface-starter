(function() {
  console.time('Application bootstrapped');

  var modules = [
    'config/bower',
    'config/app',
    'config/routes'
  ];

  require(modules, bootstrapAngular);

  function bootstrapAngular(callback) {
    angular.element(document).ready(function() {
      angular.bootstrap(document, ['app']);
    });
  }

  console.timeEnd('Application bootstrapped');
})();
