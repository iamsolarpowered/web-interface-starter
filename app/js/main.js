var magic = {
  init: function(callback) {
    require(this.files, callback || this.callback);
  },
  callback: function() {
    console.log('✨ Scripts loaded ✨');
  },
  files: [
    'config/bower',
    'config/app',
    'directives/greeting'
  ]
};

magic.init();
