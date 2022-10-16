const repository = require('./status.repository');

module.exports.get = async (req, res) => {
  const dbStatus = await repository.getStatus();

  res.send({
    statusCode: 200,
    message: `This is the Landing API, DB->${dbStatus ? '🆗' : '💥'}`
  });
};
