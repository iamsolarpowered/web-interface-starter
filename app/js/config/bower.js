require.config({
  baseUrl: '/js',
  paths: {
    'angular': '../bower_components/angular/angular',
    'angular-route': '../bower_components/angular-route/angular-route'
  },
  shim: {
    'angular-route': ['angular']
  }
});
