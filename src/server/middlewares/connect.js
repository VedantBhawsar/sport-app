// const logger = require("@/server/config/logger");
const { connectDatabase } = require("@/server/config/mongodb");

const connect =
  (next = async () => {}) =>
  async (req, res) => {
    try {
      await connectDatabase();
      return await next(req, res);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error connecting to database", error: err.message });
    }
  };

module.exports = connect;
