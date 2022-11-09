import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../src/app.js";
import statusCode from "../../src/utils/statusCodes";
import messages from "../../src/utils/customMessages";
import mockData from "../mockData/mockData.js";
import credentials from "../config/authorizationConfig.test.js";

const { noContent, contentDeleted } = messages;
const { ok, notFound, badRequest, created } = statusCode;
const { createUserType, updateUserType } = mockData.eduUserTypes;

chai.use(chaiHttp);
const api = chai.request(server).keepOpen();
const { expect } = chai;

describe("Education bind user types", () => {
  it("Should return 200 status with all available user types", (done) => {
    api.get("/v1/edu/usertypes").end((err, res) => {
      const { status } = res.body;
      expect(res.status).to.equal(ok);
      expect(status).to.equal("success");
      done();
    });
  });

  it("Should return 200 if a user type with id exist", (done) => {
    api.get("/v1/edu/usertypes/1").end((err, res) => {
      const { status } = res.body;
      expect(res.status).to.equal(ok);
      expect(status).to.equal("success");
      done();
    });
  });

  it("Should return 404 if a user type with id doesn't exist", (done) => {
    api.get("/v1/edu/usertypes/999").end((err, res) => {
      const { message } = res.body;
      expect(res.status).to.equal(notFound);
      expect(message).to.equal(noContent);
      done();
    });
  });

  it("Should return 400 if  you try to create user type with no name", (done) => {
    api
      .post("/v1/edu/usertypes")
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

  it("Should return 201 if a user type was created successfully", (done) => {
    api
      .post("/v1/edu/usertypes")
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .send(createUserType)
      .end((err, res) => {
        const { data } = res.body;
        expect(res.status).to.equal(created);
        expect(data);
        done();
      });
  });

  it("Should return 404 if a user type you try to update doesn't exist", (done) => {
    api
      .patch("/v1/edu/usertypes/999")
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .send(updateUserType)
      .end((err, res) => {
        const { data } = res.body;
        expect(res.status).to.equal(notFound);
        expect(data);
        done();
      });
  });

  it("Should return 200 if a user type was updated successfully", (done) => {
    api
      .patch("/v1/edu/usertypes/1")
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .send(updateUserType)
      .end((err, res) => {
        const { data } = res.body;
        expect(res.status).to.equal(ok);
        expect(data);
        done();
      });
  });
  it("Should return 200 if a user type was deleted successfully", (done) => {
    api
      .delete("/v1/edu/usertypes/1")
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
