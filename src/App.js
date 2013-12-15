define([
  'jQuery',
  'Cola',

  'ApiClient',
  'models/User',
  'views/LoginView'
],

function($, Cola, ApiClient, User, LoginView) {

  var $main = $('#main');

  function App() {
    this.client = new ApiClient('http://localhost:8000');
    this.router = new Cola.Router();
  }

  App.prototype.start = function() {
    var self = this;

    this.router.addRoute('/', function() {
      var view = new LoginView(),
          context = { email: new Cola.Property(),
                      password: new Cola.Property(),
                      error: new Cola.Property() };

      context.login = function(node, event) {
        User.login(self.client, context.email.get(), context.password.get(), function(err, user) {
          console.log('err', err);
          console.log('user', user);

          if (err) {
            context.error.set(err);
          } else {
            self.user = user;
            self.router.route('/feed');
          }
        });
      };

      $main.html(view.render(new Cola.Context(context)));
    });

    this.router.addRoute('/feed', function() {
      if (!self.user) {
        return self.router.route('/');
      }
    });

    this.router.route('/');
  };

  return App;

});
