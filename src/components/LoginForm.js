define([
  'Cola',

  'models/User',
  'views/LoginFormView'
],

function(Cola, User, LoginFormView) {

  function LoginForm(controller, client) {
    this.controller = controller;
    this.client     = client;
  }

  LoginForm.prototype.attach = function($handle) {
    var error    = new Cola.Property(),
        email    = new Cola.Property(),
        password = new Cola.Property();

    var loginFormView = new LoginFormView(this);
    $handle.html(loginFormView.render(error, email, password));
  };

  LoginForm.prototype.login = function(email, password, callback) {
    User.login(this.client, email, password, function(err, user) {
      if (err) return callback(err);

      app.user.set(user);
      app.router.route('/feed');
    });
  };

  return LoginForm;

});
