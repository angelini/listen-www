define([
  'Cola',
  'models/Song'
],

function(Cola, Song) {

  function User(id, email) {
    this.id    = new Cola.Property(id);
    this.email = new Cola.Property(email);

    this.friends = new Cola.Property([]);
    this.feed    = new Cola.Property([]);
  }

  User.login = function(client, email, password, callback) {
    client.login(email, password, function(err, response) {
      if (err) return callback(err);

      callback(null, new User(response.id, email));
    });
  };

  User.prototype.loadFriends = function(client, callback) {
    var self = this;

    client.loadFriends(this.id.get(), function(err, response) {
      if (err) return callback(err);

      var friends = response.map(function(friend) { return new User(friend.id, friend.email); });
      callback(null, self.friends.set(friends));
    });
  };

  User.prototype.loadFeed = function(client, callback) {
    var self = this;

    client.loadFeed(this.id.get(), function(err, response) {
      if (err) return callback(err);

      var feed = response.map(function(song) { return new Song(song.id, song.url, song.ratings); });
      callback(null, self.feed.set(feed));
    });
  };

  return User;

});
