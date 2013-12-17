define([
  'Cola',
  'views/FriendListView'
],

function(Cola, FriendListView) {

  function FriendList(controller, client) {
    this.controller = controller;
    this.client     = client;
  }

  FriendList.prototype.attach = function($handle) {
    var error          = new Cola.Property(),
        friends        = new Cola.Property(),
        friendListView = new FriendListView();

    app.user.get().loadFriends(this.client, function(err, friendData) {
      if (err)        error.set(err.error);
      if (friendData) friends.set(friendData);
    });

    $handle.html(friendListView.render(error, friends));
  };

  return FriendList;

});
