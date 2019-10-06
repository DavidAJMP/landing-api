const repository = require('./visits.repository');
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
    const { visit } = req.body;
    const { key } = req.params;

    const newVisit = await repository.create(key, visit);

    if (newVisit) res.json(newVisit);
    else {
      res.status(404).json({ message: 'Campaign not found' });
    }
  } catch (error) {
    res.status(500).send(Boom.badImplementation(error));
  }
};
