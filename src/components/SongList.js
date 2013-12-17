define([
  'Cola',
  'views/SongListView'
],

function(Cola, SongListView) {

  function SongList(controller, client) {
    this.controller = controller;
    this.client     = client;
  }

  SongList.prototype.attach = function($handle) {
    var error = new Cola.Property(),
        songs = new Cola.Property();

    var songListView = new SongListView();

    app.user.get().loadFeed(this.client, function(err, feed) {
      if (err)   error.set(err.error);
      if (songs) songs.set(feed);
    });

    $handle.html(songListView.render(error, songs));
  };

  return SongList;

});
