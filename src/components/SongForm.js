define([
  'underscore',
  'Cola',

  'models/Song',
  'views/SongFormView'
],

function(_, Cola, Song, SongFormView) {

  function SongForm(controller, client) {
    this.controller = controller;
    this.client     = client;
  }

  SongForm.prototype.attach = function($handle) {
    var error   = new Cola.Property(),
        url     = new Cola.Property(),
        friends = new Cola.Property([]);

    var songFormView = new SongFormView(this);
    $handle.html(songFormView.render(error, url, friends));
  };

  SongForm.prototype.post = function(url, friends, callback) {
    var friendIds = _.map(friends, function(friend) { return friend.id.get(); });

    Song.post(this.client, url, friendIds, function(err) {
      if (err) return callback(err);
      app.router.route('/feed');
    });
  };

  return SongForm;

});
