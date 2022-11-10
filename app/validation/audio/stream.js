const yup = require('yup');

const schema = yup
  .object()
  .shape({
    publicKey: yup.string().required().matches(/^[0-9a-f]{64}$/),
  });

module.exports = (req, _res, next) => {
  schema
    .validate(req.query)
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({
        status: 400,
        error: err.errors,
      });
    });
};
