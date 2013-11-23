var uuid = require('node-uuid');

var controller = {
  newUuid: function(req, res, next) {
    var model = { uuids: [uuid()] };
    res.model = model;

    next();
  }
};

module.exports = controller;