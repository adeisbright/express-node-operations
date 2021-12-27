const { getDateToN } = require("./date-service");
const {
    NotFoundError,
    ApplicationError,
    ForbiddenError,
    NotAuthorizeError,
    BaseError,
    BadRequestError,
} = require("../../common");

async function computeDate(req, res, next) {
    try {
        const { date } = req.body;
        let calculateDate = getDateToN(date);
        res.status(200).json({
            data: {
                body: calculateDate,
            },
        });
    } catch (error) {
        return next(new ApplicationError(error));
    }
}

module.exports = {
    computeDate,
};
