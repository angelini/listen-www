require.config({
  baseUrl: 'src',

  paths: {
    jQuery:     '../vendor/jquery',
    underscore: '../vendor/underscore',
    Cola:       '../vendor/cola'
  },

  shim: {
    underscore: {
      exports: '_'
    },

    jQuery: {
      exports: '$'
    }
  }
});

require(['Cola', 'App'], function(Cola, App) {
  window.Cola = Cola;

  window.app = new App();
  window.app.start();
});
