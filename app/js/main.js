(function() {

  var startTime = new Date();

  var modules = [
    'config/bower',
    'config/app',
    'config/routes'
  ];

  require(modules, bootstrapAngular);

  function bootstrapAngular(callback) {
    angular.element(document).ready(function() {
      angular.bootstrap(document, ['app']);
      announceSuccess();
    });
  }

  function announceSuccess() {
    var loadTime = (new Date()) - startTime;
    console.log('✨ Scripts loaded in '+ loadTime +'ms ✨');
  }

})();
