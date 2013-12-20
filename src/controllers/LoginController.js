define([
  'underscore',
  'cookie',
  'Cola',

  'models/User',
  'components/LoginForm',
],

function(_, cookie, Cola, User, LoginForm) {

  function LoginController(client, $container) {
    this.client     = client;
    this.$container = $container;
  }

  _.extend(LoginController.prototype, Cola.EventEmitter.prototype);

  LoginController.prototype.login = function() {
    if (this.checkCookies()) return;

    var loginForm = new LoginForm(this, this.client);

    this.$container.html(app.loadHTML('layt_login'));
    loginForm.attach(this.$container.find('.login_form'));
  };

  LoginController.prototype.checkCookies = function() {
    var id    = $.cookie('user_id'),
        email = $.cookie('user_email');

    if (id && email) {
      app.user.set(new User(id, email));
      app.router.route('/feed');

      return true;
    }
  };

  return LoginController;

});
