define([
  'Cola'
],

function(Cola) {

  function Song(id, url, ratings) {
    this.id      = new Cola.Property(id);
    this.url     = new Cola.Property(url);
    this.ratings = new Cola.Property(ratings);
  }

  return Song;

});
