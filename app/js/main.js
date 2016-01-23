var magic = {
  init: function(callback) {
    require(this.files, callback || this.callback);
  },
  callback: function() {
    console.log('%c' + magic.message, magic.prettiness);
  },
  message: '✨ Scripts loaded ✨',
  prettiness: 'background: indigo; color: white; font-size: 160%; font-family: fantasy; padding: 0.33em 5em 0 5em; border-radius: 1.33em;',
  files: [
    'config/bower',
    'config/app',
    'directives/greeting'
  ]
};

magic.init();
