import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../src/app.js";
import statusCode from "../../src/utils/statusCodes";
import messages from "../../src/utils/customMessages";
import mockData from "../mockData/mockData.js";
import credentials from "../config/authorizationConfig.test.js";

const { noContent, contentDeleted } = messages;
const { ok, notFound, badRequest, created } = statusCode;
const { countryExist, validCountry, invalidCountry, updateCountry } =
  mockData.countryData;

chai.use(chaiHttp);
const api = chai.request(server).keepOpen();
const { expect } = chai;

describe("Countries", () => {
  it("Should return 200 status with all available countries", (done) => {
    api.get("/api/v1/edu/countries").end((err, res) => {
      const { status } = res.body;
      expect(res.status).to.equal(ok);
      expect(status).to.equal("success");
      done();
    });
  });

  it("Should return 200 if a country with id exist", (done) => {
    api.get("/api/v1/edu/countries/1").end((err, res) => {
      const { status } = res.body;
      expect(res.status).to.equal(ok);
      expect(status).to.equal("success");
      done();
    });
  });

  it("Should return 404 if a country with id doesn't exist", (done) => {
    api.get("/api/v1/edu/countries/2").end((err, res) => {
      const { message } = res.body;
      expect(res.status).to.equal(notFound);
      expect(message).to.equal(noContent);
      done();
    });
  });

  it("Should return 400 if a country you try to create has invalid data", (done) => {
    api
      .post("/api/v1/edu/countries")
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .send(invalidCountry)
      .end((err, res) => {
        console.log(res.body)
        const { data } = res.body;
        expect(res.status).to.equal(badRequest);
        expect(data);
        done();
      });
  });

  it("Should return 400 if a country already exist", (done) => {
    api
      .post("/api/v1/edu/countries")
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .send(countryExist)
      .end((err, res) => {
        const { data } = res.body;
        expect(res.status).to.equal(badRequest);
        expect(data);
        done();
      });
  });
  it("Should return 201 if a country was created successfully", (done) => {
    api
      .post("/api/v1/edu/countries")
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .send(validCountry)
      .end((err, res) => {
        const { data } = res.body;
        expect(res.status).to.equal(created);
        expect(data);
        done();
      });
  });

  it("Should return 400 if a country you try to update has invalid data", (done) => {
    api
      .patch("/api/v1/edu/countries/1")
      .send(invalidCountry)
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .end((err, res) => {
        const { data } = res.body;
        expect(res.status).to.equal(badRequest);
        expect(data);
        done();
      });
  });

  it("Should return 404 if a country you try to update doesn't exist", (done) => {
    api
      .patch("/api/v1/edu/countries/999")
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .send(updateCountry)
      .end((err, res) => {
        const { data } = res.body;
        expect(res.status).to.equal(notFound);
        expect(data);
        done();
      });
  });

  it("Should return 200 if a country was updated successfully", (done) => {
    api
      .patch("/api/v1/edu/countries/1")
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .send(updateCountry)
      .end((err, res) => {
        const { data } = res.body;
        expect(res.status).to.equal(ok);
        expect(data);
        done();
      });
  });
  it("Should return 200 if a country was deleted successfully", (done) => {
    api
      .delete("/api/v1/edu/countries/1")
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .end((err, res) => {
        const { message } = res.body;
        expect(res.status).to.equal(ok);
        expect(message).to.equal(contentDeleted);
        done();
      });
  });
});
