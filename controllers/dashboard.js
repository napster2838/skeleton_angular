
var User = require('../models/User');
var passportConf = require('../config/passport');


module.exports.controller = function (app) {

  /**
   * GET /dashboard
   * Render Dashboard Page
   */

  app.get('/dashboard', passportConf.isAuthenticated, function (req, res) {
    User.count({}, function (err, count) {
      if (err) {
        return (err, null);
      }
      res.render('dashboard/dashboard', {
        url: req.url
      });
    });
  });

};