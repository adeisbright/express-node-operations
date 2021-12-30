const { getToday } = require("./date-service");
const { ApplicationError } = require("../../common");

async function fetchDate(req, res, next) {
    try {
        res.status(200).json({
            data: {
                body: getToday.numericDate,
            },
        });
    } catch (error) {
        return next(new ApplicationError(error));
    }
}

module.exports = {
    fetchDate,
};
