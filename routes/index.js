var uuid = require('../controllers/uuid');
var root = require('../controllers/root');

module.exports = {
  init: function(app) {
    app.get('/', root.empty);
    app.get('/new_uuid', uuid.newUuid);
  }
};
