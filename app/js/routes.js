define(['app'], function(app) {
  return app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<h1>Coming soon!</h1>'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
});
