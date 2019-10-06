const db = require('../../db');

module.exports.findAll = async key => {
  let campaign = await db.Campaign.findOne({
    where: {
      key
    }
  });
  if (campaign)
    return db.Visitor.findAll({
      where: {
        CampaignId: campaign.id
      }
    });
  else return [];
};

module.exports.create = async (key, visitor) => {
  let campaign = await db.Campaign.findOne({
    where: {
      key
    }
  });
  if (campaign) {
    visitor.CampaignId = campaign.id;
    return await db.Visitor.create(visitor);
  } else {
    return null;
  }
};
