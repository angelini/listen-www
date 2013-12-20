define([
  'underscore',
  'Cola',

  'components/SongList',
  'components/FriendList'
],

function(_, Cola, SongList, FriendList) {

  function FeedController(client, $container) {
    this.client     = client;
    this.$container = $container;
  }

  _.extend(FeedController.prototype, Cola.EventEmitter.prototype);

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
