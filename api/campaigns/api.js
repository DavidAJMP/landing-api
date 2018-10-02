let models = require('../../models');
let Boom = require('boom');
let {
  async,
  await
} = require('asyncawait');

const all = (request, reply) => {
  const getCampaigns = async(() => {
    let campaign = await (models.Campaign.findAll());
    if (campaign)
      return campaign;
    else
      return [];
  });
  getCampaigns()
    .then((campaigns) => {
      reply(campaigns).code(200);
    });
};

const post = (request, reply) => {
  let {
    campaign
  } = request.payload;
  const newCampaign = async(() => {
    return await (models.Campaign.create(campaign));
  });
  newCampaign()
    .then((campaign) => {
      reply(campaign).code(200);
    })
    .catch((error) => {
      reply(Boom.badImplementation());
    });

};

module.exports = {
  post,
  all
};