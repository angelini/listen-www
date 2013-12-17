define([
  'jQuery'
],

function($) {

  var ViewUtils = {};

  ViewUtils.loadTemplate = function(name) {
    var container = document.createElement('div');
    return $(container).html(app.loadHTML(name));
  };

  return ViewUtils;

});
