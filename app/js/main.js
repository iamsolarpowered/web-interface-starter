(function(timerLabel) {
  console.time(timerLabel);

  require([

    'config/bower',
    'config/app',
    'config/routes'

  ], function() {

    angular.element(document).ready(function() {
      angular.bootstrap(document, ['app']);
      console.timeEnd(timerLabel);
    });

  });
})('Application bootstrapped');
