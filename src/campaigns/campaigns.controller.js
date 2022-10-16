const repository = require('./campaigns.repository');
const Boom = require('boom');

module.exports.get = async (req, res, next) => {
  try {
    const campaigns = await repository.findAll();
    return res.json(campaigns);
  } catch (error) {
    console.error(error);
    return res.status(500).send(Boom.badImplementation(error));
  }
};

module.exports.post = async (req, res, next) => {
  try {
    const { campaign } = req.body;

    const newCampaign = await repository.create(campaign);

    return res.json(newCampaign);
  } catch (error) {
    return res.status(500).send(Boom.badImplementation(error));
  }
};
