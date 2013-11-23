var json = require('./json');

exports = module.exports = function responders(options) {
  var options = options || {};

  return function(req, res, next) {
    res.json(res.model);
  };
};