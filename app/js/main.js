(function(timerLabel) {
  console.time(timerLabel);

  var modules = [
    'config/bower',
    'config/app',
    'config/routes'
  ];

  var bootstrap = function() {
    angular.element(document).ready(function() {
      angular.bootstrap(document, ['app']);
      console.timeEnd(timerLabel);
    });
  };

  require(modules, bootstrap);
})('✨');
