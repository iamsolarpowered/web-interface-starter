(function() {
  var magic = {
    init: function(callback) {
      require(this.files, this.callback);
    },
    callback: function() {
      angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
        console.log('✨ Scripts loaded ✨');
      });
    },
    files: [
      'config/bower',
      'config/app',
      'config/routes'
    ]
  };

  magic.init();
})();
