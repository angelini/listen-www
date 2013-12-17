define([
  'models/User',
  'components/LoginForm'
],

function(User, LoginForm) {

  function LoginController(client, $container) {
    this.client     = client;
    this.$container = $container;
  }

  LoginController.prototype.login = function() {
    var loginForm = new LoginForm(this, this.client);

    this.$container.html(app.loadHTML('layt_login'));
    loginForm.attach(this.$container.find('.login_form'));
  };

  return LoginController;

});
