define([
  'Cola',
  'views/ViewUtils'
],

function(Cola, ViewUtils) {

  function SongListView(comp) {
    this.comp   = comp;
    this.$node  = ViewUtils.loadTemplate('tmpl_songs');
    this.parser = new Cola.Parser(this.$node[0]);
  }

  SongListView.prototype.render = function(error, songs) {
    var context = {
      error: error,
      songs: songs
    };

    this.parser.parse(context);
    return this.$node;
  };

  return SongListView;

});
