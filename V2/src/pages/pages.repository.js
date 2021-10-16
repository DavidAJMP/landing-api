const db = require("../../db");

module.exports.findAll = async (key) => {
  let campaign = await db.Campaign.findOne({
    where: {
      key,
    },
  });
  if (campaign)
    return db.Page.findAll({
      where: {
        CampaignId: campaign.id,
      },
    });
  else return [];
};

module.exports.create = async (key, page) => {
  let campaign = await db.Campaign.findOne({
    where: {
      key,
    },
  });
  if (campaign) {
    page.CampaignId = campaign.id;
    return await db.Page.create(page);
  } else {
    return null;
  }
};
