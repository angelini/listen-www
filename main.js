require.config({
  baseUrl: 'src',

  paths: {
    jQuery:     '../vendor/jquery',
    underscore: '../vendor/underscore',
    cookie:     '../vendor/jquery.cookie',
    Cola:       '../vendor/cola'
  },

  shim: {
    underscore: {
      exports: '_'
    },

    jQuery: {
      exports: '$'
    },

    cookie: {
      deps: ['jQuery']
    }
  }
});

require(['Cola', 'App'], function(Cola, App) {
  window.Cola = Cola;

  window.app = new App();
  window.app.start();
});
