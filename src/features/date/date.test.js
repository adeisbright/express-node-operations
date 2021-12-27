const chai = require("chai");
const sinon = require("sinon");
const { getDateToN } = require("./index");

const expect = chai.expect;

describe("Date Service", () => {
    describe("Calculate Day from now to N date", () => {
        it("Should throw an error", (done) => {
            const logger = sinon.spy();

            const futureDate = getDateToN("2021-12-27", logger);
            expect(logger.calledOnce).to.be.true;
            expect(logger.calledWith("The date provided is not valid")).to.be
                .true;
            expect(logger.callCount).to.be.eq(1);
            done();
        });

        it("Should return today's date", (done) => {
            const logger = sinon.spy();

            const futureDate = getDateToN("2021-09-27", logger);
            expect(futureDate).to.be.a("string");

            done();
        });
    });
});
