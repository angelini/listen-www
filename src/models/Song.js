define([
  'underscore',
  'Cola'
],

function(_, Cola) {

  function Song(id, url, ratings) {
    this.id      = new Cola.Property(id);
    this.url     = new Cola.Property(url);
    this.ratings = new Cola.Property(ratings);
  }

  Song.post = function(client, url, friendIds, callback) {
    client.postSong(url, friendIds, function(err, response) {
      if (err) return callback(err);

      var results = _.map(friendIds, function() { return 0; }),
          ratings = _.object(friendIds, results);

      callback(null, new Song(response.id, url, ratings));
    });
  };

  return Song;

});
