module.exports = (req, _res, next) => {
  if (Object.keys(req.query).length === 0) {
    next()
  } else {
    next({
      status: 400,
      error: ['Invalid query parameters(s)'],
    });
  }
};
