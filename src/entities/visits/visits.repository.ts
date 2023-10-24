import db from "../../db";

export async function findAll(key) {
  let campaign = await db.Campaign.findOne({
    where: {
      key,
    },
  });
  if (campaign)
    return db.Visit.findAll({
      where: {
        CampaignId: campaign.id,
      },
    });
  else return [];
}

export async function create(key, visit) {
  let campaign = await db.Campaign.findOne({
    where: {
      key,
    },
  });
  if (campaign) {
    visit.CampaignId = campaign.id;
    return await db.Visit.create(visit);
  } else {
    return null;
  }
}
