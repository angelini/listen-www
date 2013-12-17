define([
  'components/SongForm',
  'components/FriendList'
],

function(SongForm, FriendList) {

  function PostController(client, $container) {
    this.client     = client;
    this.$container = $container;
  }

  PostController.prototype.post = function() {
    if (!app.user.get()) {
      return app.router.route('/');
    }

    var songForm   = new SongForm(this, this.client),
        friendList = new FriendList(this, this.client);

    this.$container.html(app.loadHTML('layt_post'));

    songForm.attach(this.$container.find('.song_form'));
    friendList.attach(this.$container.find('.friend_list'));
  };

  return PostController;

});
