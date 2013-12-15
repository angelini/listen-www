define([
  'jQuery'
],

function($) {

  var ViewUtils = {};

  ViewUtils.loadTemplate = function(name) {
    var container = document.createElement('div');
    return $(container).html($('#' + name).html());
  };

  return ViewUtils;

});
