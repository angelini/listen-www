define([
  'underscore',
  'Cola',

  'components/SongForm',
  'components/FriendList'
],

function(_, Cola, SongForm, FriendList) {

  function PostController(client, $container) {
    this.client     = client;
    this.$container = $container;
  }

  _.extend(PostController.prototype, Cola.EventEmitter.prototype);

  PostController.prototype.post = function() {
    if (!app.user.get()) {
      return app.router.route('/');
    }

    var songForm   = new SongForm(this, this.client),
        friendList = new FriendList(this, this.client);

    this.$container.html(app.loadHTML('layt_post'));

    songForm.attach(this.$container.find('.song_form'));
    friendList.attach(this.$container.find('.friend_list'), {
      emitSelected: true
    });
  };

  return PostController;

});
