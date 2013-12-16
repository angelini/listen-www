define([
  'Cola',
  'views/ViewUtils'
],

function(Cola, ViewUtils) {

  var TEMPLATE = 'tmpl_feed';

  function FeedView(controller) {
    this.controller = controller;
    this.$node      = ViewUtils.loadTemplate(TEMPLATE);
    this.parser     = new Cola.Parser(this.$node[0]);
  }

  FeedView.prototype.render = function(feed, error) {
    var context = {
      feed: feed,
      error: error
    };

    this.parser.parse(context);
    return this.$node;
  };

  return FeedView;

});
