const CookieController = {};

CookieController.setSSID = (req, res, next) => {
  res.cookie('ssid', res.locals.user, {
    httpOnly: true,
  });
  return next();
};

module.exports = { CookieController };
