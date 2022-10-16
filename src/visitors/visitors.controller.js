const repository = require('./visitors.repository');
const Boom = require('boom');

module.exports.get = async (req, res, next) => {
  try {
    const { key } = req.params;
    const result = await repository.findAll(key);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(Boom.badImplementation(error));
  }
};

module.exports.post = async (req, res, next) => {
  try {
    const { visitor } = req.body;
    const { key } = req.params;

    const newVisitor = await repository.create(key, visitor);

    if (newVisitor) res.json(newVisitor);
    else {
      res.status(404).json({ message: 'Campaign not found' });
    }
  } catch (error) {
    res.status(500).send(Boom.badImplementation(error));
  }
};
