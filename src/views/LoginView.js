define([
  'Cola'
],

function(Cola) {

  var TEMPLATE = 'tmpl_login_form';

  var loadTemplate = function(name) {
    var container = document.createElement('div');
    return $(container).html($('#' + name).html());
  };

  function LoginView(controller) {
    this.controller = controller;
    this.$node      = loadTemplate(TEMPLATE);
    this.parser     = new Cola.Parser(this.$node[0]);
  }

  LoginView.prototype.render = function() {
    var context = {
      email: new Cola.Property(),
      password: new Cola.Property(),
      error: new Cola.Property(),
      login: this.login.bind(this)
    };

    this.parser.parse(new Cola.Context(context));
    return this.$node;
  };

  LoginView.prototype.login = function(node, event, context) {
    var email    = context.lookup('email').get(),
        password = context.lookup('password').get();

    if (!email) {
      return context.error.set('Email Required');
    }

    if (!password) {
      return context.error.set('Password Required');
    }

    this.controller.login(email, password, function(err) {
      context.error.set(err.error);
    });
  };

  return LoginView;

});
