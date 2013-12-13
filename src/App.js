define([
  'Cola',

  'ApiClient',
  'User',
],

function(Cola, ApiClient, User) {

  function App() {
    this.client = new ApiClient('http://localhost:8080');
    this.router = new Cola.Router();
  }

  App.prototype.start = function() {
    User.login(this.client, 'first@test.com', '1234', function(err, user) {
      console.log('user', user);
    });
  };

  return App;

});
