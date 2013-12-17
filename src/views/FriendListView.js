define([
  'Cola',
  'views/ViewUtils'
],

function(Cola, ViewUtils) {

  function FriendListView(comp) {
    this.comp   = comp;
    this.$node  = ViewUtils.loadTemplate('tmpl_friends');
    this.parser = new Cola.Parser(this.$node[0]);
  }

  FriendListView.prototype.render = function(error, friends) {
    var context = {
      error: error,
      friends: friends
    };

    this.parser.parse(context);
    return this.$node;
  };

  return FriendListView;

});
