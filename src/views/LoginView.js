define([
  'Cola'
],

function(Cola) {

  var TEMPLATE = 'tmpl_login_form';

  var loadTemplate = function(name) {
    var container = document.createElement('div');
    return $(container).html($('#' + name).html());
  };

  function LoginView() {
    this.node   = loadTemplate(TEMPLATE);
    this.parser = new Cola.Parser(this.node[0]);
  }

  LoginView.prototype.render = function(context) {
    this.parser.parse(context);
    return this.node;
  };

  return LoginView;

});
