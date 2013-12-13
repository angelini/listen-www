define([
  'underscore',
  'jQuery',
  'Cola'
],

function(_, $, Cola) {

  var DEFAULT_OPTIONS = {
    contentType: 'application/json'
  };

  function ApiClient(host) {
    this.base = host + '/api';
  }

  ApiClient.prototype.request = function(options, callback) {
    $.ajax(_.extend({
      success: function(response) { callback(null, response); },
      error:   function(error)    { callback(error); }
    }, DEFAULT_OPTIONS, options));
  };

  ApiClient.prototype.login = function(email, password, callback) {
    this.request({
      url: this.base + '/users/login',
      type: 'POST',
      data: {email: email, password: password}
    }, callback);
  };

  return ApiClient;

});
