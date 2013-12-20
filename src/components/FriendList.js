define([
  'underscore',
  'Cola',

  'views/FriendListView'
],

function(_, Cola, FriendListView) {

  function FriendList(controller, client) {
    this.controller = controller;
    this.client     = client;
  }

  FriendList.prototype.attach = function($handle, params) {
    params = params || {};

    var error          = new Cola.Property(),
        friends        = new Cola.List();

    app.user.get().loadFriends(this.client, function(err, friendData) {
      if (err)        error.set(err.error);
      if (friendData) friends.set(friendData);
    });

    if (params.emitSelected) this.emitSelected(friends);

    var friendListView = new FriendListView();
    $handle.html(friendListView.render(error, friends));
  };

  FriendList.prototype.emitSelected = function(friends) {
    _.each(friends, function(friend) { friend.selected = new Property(false); });

    var self = this,
        selected = new Cola.FilteredList(friends, function(friend) {
          return friend.get().selected.get();
        });

    selected.on('change', function(friends) {
      self.controller.emit('friends:selected', friends);
    });
  };

  return FriendList;

});
