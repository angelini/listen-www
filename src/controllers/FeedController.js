define([
  'views/FeedView'
],

function(FeedView) {

  function FeedController(client, $container) {
    this.client     = client;
    this.$container = $container;
  }

  FeedController.prototype.feedRoute = function() {
    var user  = app.user.get(),
        error = new Cola.Property();

    if (!user) {
      return app.router.route('/');
    }

    user.loadFeed(this.client, function(err, feed) {
      if (err) error.set(err.error);
    });

    var view = new FeedView(this);
    this.$container.html(view.render(user.feed, error));
  };

  return FeedController;

});
