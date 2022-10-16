const repository = require('./pages.repository');
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
    const { page } = req.body;
    const { key } = req.params;

    const newPage = await repository.create(key, page);

    if (newPage) res.json(newPage);
    else {
      res.status(404).json({ message: 'Campaign not found' });
    }
  } catch (error) {
    res.status(500).send(Boom.badImplementation(error));
  }
};
