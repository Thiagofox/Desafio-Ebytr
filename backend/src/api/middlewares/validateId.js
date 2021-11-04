const { ObjectId } = require('mongodb');

// middleware para validação do id com o ObjectId do mongoDb
function idValidation(req, _res, next) {
  if ('_id' in req.body) {
    req.body._id = ObjectId(req.body._id);
  }
  next();
}

module.exports = {
  idValidation,
};
