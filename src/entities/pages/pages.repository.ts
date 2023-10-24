import db from "../../db";

export async function findAll(key) {
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
}

export async function create(key, page) {
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
}
