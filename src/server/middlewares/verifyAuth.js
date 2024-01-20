const { getServerSession } = require("next-auth");
const connect = require("./connect");
const { getOptions } = require("@/pages/api/auth/[...nextauth]");
// const logger = require("../config/logger");

const verifyAuth =  (next) => async (req, res) => {
    const time = new Date();
    const session = await getServerSession(req, res, getOptions(req, res));
    if (session) {
        req.user = session;
        return await next(req, res);
    }
    res.status(401).json({ message: "Unauthorized" });

};

module.exports = connect(verifyAuth)