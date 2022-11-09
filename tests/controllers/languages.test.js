import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../src/app.js";
import statusCode from "../../src/utils/statusCodes";
import messages from "../../src/utils/customMessages";
import mockData from "../mockData/mockData.js";
import credentials from "../config/authorizationConfig.test.js";

const { noContent, contentDeleted } = messages;
const { ok, notFound, badRequest, created } = statusCode;
const { createLanguage, updateLanguage } = mockData.eduLanguages;

chai.use(chaiHttp);
const api = chai.request(server).keepOpen();
const { expect } = chai;

describe("Education bind languages", () => {
  it("Should return 200 status with all available languages", (done) => {
    api.get("/v1/edu/languages").end((err, res) => {
      const { status } = res.body;
      expect(res.status).to.equal(ok);
      expect(status).to.equal("success");
      done();
    });
  });

  it("Should return 200 if a language with id exist", (done) => {
    api.get("/v1/edu/languages/1").end((err, res) => {
      const { status } = res.body;
      expect(res.status).to.equal(ok);
      expect(status).to.equal("success");
      done();
    });
  });

  it("Should return 404 if a language with id doesn't exist", (done) => {
    api.get("/v1/edu/languages/2").end((err, res) => {
      const { message } = res.body;
      expect(res.status).to.equal(notFound);
      expect(message).to.equal(noContent);
      done();
    });
  });

  it("Should return 400 if  you try to create language with no name", (done) => {
    api
      .post("/v1/edu/languages")
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .send({})
      .end((err, res) => {
        const { data } = res.body;
        expect(res.status).to.equal(badRequest);
        expect(data);
        done();
      });
  });

  it("Should return 201 if a language was created successfully", (done) => {
    api
      .post("/v1/edu/languages")
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .send(createLanguage)
      .end((err, res) => {
        const { data } = res.body;
        expect(res.status).to.equal(created);
        expect(data);
        done();
      });
  });

  it("Should return 404 if a language you try to update doesn't exist", (done) => {
    api
      .patch("/v1/edu/languages/999")
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .send(updateLanguage)
      .end((err, res) => {
        const { data } = res.body;
        expect(res.status).to.equal(notFound);
        expect(data);
        done();
      });
  });

  it("Should return 200 if a language was updated successfully", (done) => {
    api
      .patch("/v1/edu/languages/1")
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .send(updateLanguage)
      .end((err, res) => {
        const { data } = res.body;
        expect(res.status).to.equal(ok);
        expect(data);
        done();
      });
  });
  it("Should return 200 if a language was deleted successfully", (done) => {
    api
      .delete("/v1/edu/languages/1")
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
