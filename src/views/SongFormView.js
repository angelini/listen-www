define([
  'Cola',
  'views/ViewUtils'
],

function(Cola, ViewUtils) {

  function SongFormView(comp) {
    this.comp   = comp;
    this.$node  = ViewUtils.loadTemplate('tmpl_song_form');
    this.parser = new Cola.Parser(this.$node[0]);
  }

  SongFormView.prototype.render = function(error, url, friends) {
    var context = {
      error: error,
      url: url,
      friends: friends
    };

    this.parser.parse(context);
    return this.$node;
  };

  SongFormView.prototype.post = function(node, event, context) {
    if (!context.url.get()) {
      return error.set('URL Required');
    }

    this.comp.post(context.url.get(), context.friends.get(), function(err) {
      context.error.set(err.error);
    });
  };

  return SongFormView;

});
