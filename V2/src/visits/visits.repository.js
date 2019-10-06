const db = require('../../db');

module.exports.findAll = async key => {
  let campaign = await db.Campaign.findOne({
    where: {
      key
    }
  });
  if (campaign)
    return db.Visit.findAll({
      where: {
        CampaignId: campaign.id
      }
    });
  else return [];
};

module.exports.create = async (key, visit) => {
  let campaign = await db.Campaign.findOne({
    where: {
      key
    }
  });
  if (campaign) {
    visit.CampaignId = campaign.id;
    return await db.Visit.create(visit);
  } else {
    return null;
  }
};
