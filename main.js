require.config({
  baseUrl: 'src',

  paths: {
    jQuery:     '../vendor/jquery',
    underscore: '../vendor/underscore',

    eventemitter2:    '../vendor/cola.js/vendor/eventemitter2',

    PropertyStack:    '../vendor/cola.js/src/PropertyStack',
    Property:         '../vendor/cola.js/src/Property',
    ComputedProperty: '../vendor/cola.js/src/ComputedProperty',

    Keypath:          '../vendor/cola.js/src/Keypath',
    Binding:          '../vendor/cola.js/src/Binding',
    Parser:           '../vendor/cola.js/src/Parser',

    RouteNode:        '../vendor/cola.js/src/RouteNode',
    RouteTree:        '../vendor/cola.js/src/RouteTree',
    Router:           '../vendor/cola.js/src/Router',

    Cola:             '../vendor/cola.js/src/Cola'
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

require(['App'], function(App) {
  (new App()).start();
});
