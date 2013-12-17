define([
  'Cola',
  'views/ViewUtils'
],

function(Cola, ViewUtils) {

  function LoginFormView(comp) {
    this.comp   = comp;
    this.$node  = ViewUtils.loadTemplate('tmpl_login_form');
    this.parser = new Cola.Parser(this.$node[0]);
  }

  LoginFormView.prototype.render = function(error, email, password) {
    var context = {
      error: error,
      email: email,
      password: password,
      login: this.login.bind(this)
    };

    this.parser.parse(context);
    return this.$node;
  };

  LoginFormView.prototype.login = function(node, event, context) {
    if (!context.email.get()) {
      return error.set('Email Required');
    }

    if (!context.password.get()) {
      return error.set('Password Required');
    }

    this.comp.login(context.email.get(), context.password.get(), function(err) {
      context.error.set(err.error);
    });
  };

  return LoginFormView;

});
