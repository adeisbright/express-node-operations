const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../app");
const sinon = require("sinon");
const { getToday } = require("./index");
const { authenticateRequest } = require("../../middleware");
const {
    ApplicationError,
    NotAuthorizeError,
    NotFoundError,
    ErrorAlert,
} = require("../../common");

const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);

describe("Date Service", () => {
    describe("Returns the current date", () => {
        it("Should returns the numeric date of today", (done) => {
            const date = new Date();
            const currentDate = date.getDate();
            const today = getToday().numericDate;

            expect(today).to.be.eq(currentDate);
            done();
        });
    });

    describe("Date Controller", () => {
        it("Should throw a 400 Error ", async () => {
            const res = await chai.request(app).get("/get-date");

            res.body.should.have.property("message");
            res.body.should.have
                .property("message")
                .to.eq("Provide your API_KEY");
            res.status.should.be.eq(400);
        });
        it("Should return the current Date", async () => {
            const headers = {
                "api-key": 123,
            };
            const res = await chai.request(app).get("/get-date").set(headers);

            res.body.should.have.property("data");
            res.status.should.be.eq(200);
        });
    });
});

describe("Middleware", () => {
    describe("Authenticate Request", () => {
        it("Should check if the user provides the correct api-key", (done) => {
            const next = sinon.spy();
            const req = {
                headers: {},
            };
            const json = sinon.stub();
            const status = sinon.stub();
            const res = { status, json };
            authenticateRequest(req, res, next);
            expect(next.calledOnce).to.be.true;

            done();
        });
    });
});

describe("Error Classification", () => {
    describe("ApplicationError", () => {
        it("Should return the status code", (done) => {
            const error = new ApplicationError(
                "An error occured in the Application"
            );

            expect(error.statusCode).to.be.eq(500);
            expect(error.name).to.be.eq("ApplicationError");
            done();
        });
    });
    describe("NotAuthorizeError", () => {
        it("Should return the type of error", (done) => {
            const error = new NotAuthorizeError("Not Authorize");

            expect(error.statusCode).to.be.eq(401);
            expect(error.name).to.be.eq("NotAuthorizeError");
            done();
        });
    });
    describe("NotFoundError", () => {
        it("Should return the type of error as NotFoundError", (done) => {
            const error = new NotFoundError("Not Found");

            expect(error.statusCode).to.be.eq(404);
            expect(error.name).to.be.eq("NotFoundError");
            done();
        });
    });
});

describe("Error Alert", () => {
    describe("notify()", () => {
        it("Should notify application admins of an error", (done) => {
            const errorAlert = new ErrorAlert("Error occured", "Test Error");
            const mock = sinon.mock(errorAlert);
            const expectation = mock.expects("notify");
            expect(expectation.once()).to.be.true;
            mock.restore();
            done();
        });
    });
});
