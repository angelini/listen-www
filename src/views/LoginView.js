define([
  'Cola',
  'views/ViewUtils'
],

function(Cola, ViewUtils) {

  var TEMPLATE = 'tmpl_login_form';

  function LoginView(controller) {
    this.controller = controller;
    this.$node      = ViewUtils.loadTemplate(TEMPLATE);
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
    var error    = context.lookup('error'),
        email    = context.lookup('email'),
        password = context.lookup('password');

    if (!email.get()) {
      return error.set('Email Required');
    }

    if (!password.get()) {
      return error.set('Password Required');
    }

    this.controller.login(email.get(), password.get(), function(err) {
      error.set(err.error);
    });
  };

  return LoginView;

});
