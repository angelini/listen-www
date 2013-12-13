define([
  'Cola'
],

function(Cola) {

  function User(id, email) {
    var self = this;

    this.id    = new Cola.Property(id);
    this.email = new Cola.Property(email);

    this.comp  = new Cola.ComputedPropert(function() {
      return self.email.get() + '_' + self.id.get();
    });
  }

  User.login = function(client, email, password, callback) {
    client.login(email, password, function(err, reponse) {
      callback(err, new User(response.id, email));
    });
  };

  return User;

});
