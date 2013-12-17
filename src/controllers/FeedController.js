define([
  'components/SongList',
  'components/FriendList'
],

function(SongList, FriendList) {

  function FeedController(client, $container) {
    this.client     = client;
    this.$container = $container;
  }

  FeedController.prototype.feed = function() {
    if (!app.user.get()) {
      return app.router.route('/');
    }

    var songList   = new SongList(this, this.client),
        friendList = new FriendList(this, this.client);

    this.$container.html(app.loadHTML('layt_feed'));

    songList.attach(this.$container.find('.song_list'));
    friendList.attach(this.$container.find('.friend_list'));
  };

  return FeedController;

});
