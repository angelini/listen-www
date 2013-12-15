define([
  'jQuery',
  'Cola',

  'ApiClient',
  'controllers/LoginController'
],

function($, Cola, ApiClient, LoginController) {

  function App() {
    this.$container = $('#main');

    this.client = new ApiClient('http://localhost:8000');
    this.router = new Cola.Router();
    this.user   = new Cola.Property();
  }

  App.prototype.start = function() {
    var loginController = new LoginController(this.client, this.$container);

    this.router.addRoute('/', loginController.loginRoute.bind(loginController));
    this.router.addRoute('/feed', function() { console.log('feed'); });

    this.router.route('/');
  };

  return App;

});
