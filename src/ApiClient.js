define([
  'underscore',
  'jQuery',
  'Cola'
],

function(_, $, Cola) {

  var DEFAULT_OPTIONS = {
    dataType: 'json',
    contentType: 'application/json'
  };

  function ApiClient(host) {
    this.base = host + '/api';
  }

  ApiClient.prototype.request = function(options, callback) {
    if (options.data) {
      options.data = JSON.stringify(options.data);
    }

    $.ajax(_.extend({
      success: function(response) { callback(null, response); },
      error:   function(error)    { callback(error.responseJSON); }
    }, DEFAULT_OPTIONS, options));
  };

  ApiClient.prototype.login = function(email, password, callback) {
    this.request({
      url: this.base + '/users/login',
      type: 'POST',
      data: {email: email, password: password}
    }, callback);
  };

  ApiClient.prototype.loadFriends = function(id, callback) {
    this.request({
      url: this.base + '/users/' + id + '/friends'
    }, callback);
  };

  ApiClient.prototype.loadFeed = function(id, callback) {
    this.request({
      url: this.base + '/users/' + id + '/feed'
    }, callback);
  };

  return ApiClient;

});
