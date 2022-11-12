import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../src/app.js";
import statusCode from "../../src/utils/statusCodes";
import credentials from "../config/authorizationConfig.test.js";

const { ok } = statusCode;

chai.use(chaiHttp);
const api = chai.request(server).keepOpen();
const { expect } = chai;

describe("Education bind notifications", () => {
  it("Should return 200 status with all notifications", (done) => {
    api
      .get("/sis/v1/notifications")
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .end((err, res) => {
        const { status } = res.body;
        expect(res.status).to.equal(ok);
        expect(status).to.equal("success");
        done();
      });
  });
  it("Should return 200 status with a notification", (done) => {
    api
      .get("/sis/v1/notifications/1")
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .end((err, res) => {
        const { status } = res.body;
        expect(res.status).to.equal(ok);
        expect(status).to.equal("success");
        done();
      });
  });
  it("Should return 200 status with notification read", (done) => {
    api
      .patch("/sis/v1/notifications/read/1")
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .end((err, res) => {
        const { status } = res.body;
        expect(res.status).to.equal(ok);
        expect(status).to.equal("success");
        done();
      });
  });
  it("Should return 200 status with notification read", (done) => {
    api
      .patch("/sis/v1/notifications/read/")
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .end((err, res) => {
        const { status } = res.body;
        expect(res.status).to.equal(ok);
        expect(status).to.equal("success");
        done();
      });
  });
});
