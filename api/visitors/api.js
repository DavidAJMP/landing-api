let db = require('../../models');
let Boom = require('boom');
let {
  async,
  await
} = require('asyncawait');

const all = (request, reply) => {
  let key = request.params.key;
  const getVisitors = async(() => {
    let campaign = await (db.campaigns.find({
      where: {
        key
      }
    }));
    if (campaign)
      return await (db.visitors.findAll({
        where: {
          CampaignId: campaign.id
        }
      }));
    else
      return [];
  });
  getVisitors()
    .then((visitors) => {
      reply(visitors).code(200);
    });
};

const post = (request, reply) => {
  let {
    visitor
  } = request.payload;
  let key = request.params.key;
  const newVisitor = async(() => {
    let campaign = await (db.campaigns.find({
      where: {
        key
      }
    }));
    if (campaign) {
      visitor.CampaignId = campaign.id;
      return await (db.visitors.create(visitor));
    } else {
      return null;
    }
  });
  newVisitor()
    .then((visitor) => {
      reply(visitor).code(200);
    })
    .catch((error) => {
      reply(Boom.badImplementation());
    });

};

module.exports = {
  post,
  all
};