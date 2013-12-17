define([
  'jQuery',
  'Cola',

  'ApiClient',
  'controllers/LoginController',
  'controllers/FeedController'
],

function($, Cola, ApiClient, LoginController, FeedController) {

  function App() {
    this.$container = $('#main');

    this.client = new ApiClient('http://localhost:8000');
    this.router = new Cola.Router();
    this.user   = new Cola.Property();
  }

  App.prototype.loadHTML = function(name) {
    return $('#' + name).html();
  };

  App.prototype.start = function() {
    var loginController = new LoginController(this.client, this.$container),
        feedController  = new FeedController(this.client, this.$container);

    this.router.addRoute('/', loginController.login.bind(loginController));
    this.router.addRoute('/feed', feedController.feed.bind(feedController));

    this.router.route('/');
  };

  return App;

});
