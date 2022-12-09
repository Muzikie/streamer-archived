const yup = require('yup');

const schema = yup
  .object()
  .shape({
    address: yup.string().required().matches(/^[0-9a-z]{3}[23456789abcdefghjkmnopqrstuvwxyz]{38}$/),
    range: yup.string().required().matches(/^\d+-\d+$/),
  });

module.exports = (req, _res, next) => {
  schema
    .validate(req.headers)
    .then(() => next())
    .catch((err) => next({
      status: 400,
      error: err.errors,
    }));
};
