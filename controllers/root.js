
var controller = {
  empty: function(req, res, next) {
    var model = {};

    function getRelUri (name) {
      var host = req.host;
      var port = req.port ? ':' + req.port : '';
      return 'http://' + req.headers.host + name;
    }

    res.model = {
      new_uuid_url: getRelUri('/new_uuid{?num}'),
      base64_encode_url: getRelUri('/base64_encode?this={string}'),
      url_encode_url: getRelUri('/url_encode?this={string}'),
      help_url: getRelUri('/wtf')
    };

    next();
  }
};

module.exports = controller;