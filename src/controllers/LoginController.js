define([
  'models/User',
  'views/LoginView'
],

function(User, LoginView) {

  function LoginController(client, $container) {
    this.client     = client;
    this.$container = $container;
  }

  LoginController.prototype.loginRoute = function() {
    var view = new LoginView(this);
    this.$container.html(view.render());
  };

  LoginController.prototype.login = function(email, password, callback) {
    User.login(this.client, email, password, function(err, user) {
      if (err) return callback(err);

      app.user.set(user);
      app.router.route('/feed');
    });
  };

  return LoginController;

});
