const yup = require('yup');
const { getCookies } = require('../../utils/cookie');

const schema = yup
  .object()
  .shape({
    address: yup.string().required().matches(/^[0-9a-z]{3}[23456789abcdefghjkmnopqrstuvwxyz]{38}$/),
    range: yup.string().required().matches(/^bytes=\d+-\d+$/),
  });

module.exports = (req, _res, next) => {
  const cookies = getCookies(req.headers.cookie);
  const data = {
    address: cookies.address,
    range: req.headers.range,
  };
  schema
    .validate(data)
    .then(() => next())
    .catch((err) => next({
      status: 400,
      error: err.errors,
    }));
};
