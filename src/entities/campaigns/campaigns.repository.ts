import db from "../../db";

export const findAll = async () => {
  return await db.Campaign.findAll({});
};

export const create = async (campaign) => {
  return await db.Campaign.create(campaign);
};
