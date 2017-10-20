let models = require('../../models');
let Boom = require('boom');
let {
  async,
  await
} = require('asyncawait');

 const all = (request, reply) => {
    let key = request.params.key;
    const getVisits = async(() => {
      let campaign = await(models.Campaign.find({ where: { key } }));
      if (campaign)
        return await(models.Visit.findAll({ where: { CampaignId: campaign.id } }));
      else
        return [];
    });
    getVisits()
      .then((visits) => {
        reply(visits).code(200);
      });
  };

  const post = (request, reply) => {
    let { visit } = request.payload;
    let key = request.params.key;
    const newVisit = async(() => {
      let campaign = await(models.Campaign.find({ where: { key } }));
      if (campaign) {
        visit.CampaignId = campaign.id;
        return await(models.Visit.create(visit));
      } else {
        return null;
      }
    }));
    if (campaign) {
      visit.CampaignId = campaign.id;
      return await (models.Visit.create(visit));
    } else {
      return null;
    }
  });
  newVisit()
    .then((visit) => {
      reply(visit).code(200);
    })
    .catch((error) => {
      reply(Boom.badImplementation());
    });
    newVisit()
      .then((visit) => {
        reply(visit).code(200);
      })
      .catch((error) => {
        reply(Boom.badImplementation());
      });
  };

module.exports = {
    post,
    all    
};