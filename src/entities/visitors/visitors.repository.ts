import db from "../../db";

export async function findAll(key) {
  let campaign = await db.Campaign.findOne({
    where: {
      key,
    },
  });
  if (campaign)
    return db.Visitor.findAll({
      where: {
        CampaignId: campaign.id,
      },
    });
  else return [];
}

export async function create(key, visitor) {
  let campaign = await db.Campaign.findOne({
    where: {
      key,
    },
  });
  if (campaign) {
    visitor.CampaignId = campaign.id;
    return await db.Visitor.create(visitor);
  } else {
    return null;
  }
}
