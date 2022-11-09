import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../src/app.js";
import statusCode from "../../src/utils/statusCodes";
import messages from "../../src/utils/customMessages";
import mockData from "../mockData/mockData.js";
import credentials from "../config/authorizationConfig.test.js";

const { noContent, contentDeleted } = messages;
const { ok, notFound, badRequest, created } = statusCode;
const { createPermission, updatePermission } = mockData.eduPermissions;

chai.use(chaiHttp);
const api = chai.request(server).keepOpen();
const { expect } = chai;

describe("Education bind permissions", () => {
  it("Should return 200 status with all available permissions", (done) => {
    api.get("/sis/v1/edu/permissions").end((err, res) => {
      const { status } = res.body;
      expect(res.status).to.equal(ok);
      expect(status).to.equal("success");
      done();
    });
  });

  it("Should return 200 if a permission with id exist", (done) => {
    api.get("/sis/v1/edu/permissions/1").end((err, res) => {
      const { status } = res.body;
      expect(res.status).to.equal(ok);
      expect(status).to.equal("success");
      done();
    });
  });

  it("Should return 404 if a permission with id doesn't exist", (done) => {
    api.get("/sis/v1/edu/permissions/999").end((err, res) => {
      const { message } = res.body;
      expect(res.status).to.equal(notFound);
      expect(message).to.equal(noContent);
      done();
    });
  });

  it("Should return 400 if  you try to create permission with no name", (done) => {
    api
      .post("/sis/v1/edu/permissions")
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

  it("Should return 201 if a permission was created successfully", (done) => {
    api
      .post("/sis/v1/edu/permissions")
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .send(createPermission)
      .end((err, res) => {
        const { data } = res.body;
        expect(res.status).to.equal(created);
        expect(data);
        done();
      });
  });

  it("Should return 404 if a permission you try to update doesn't exist", (done) => {
    api
      .patch("/sis/v1/edu/permissions/999")
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .send(updatePermission)
      .end((err, res) => {
        const { data } = res.body;
        expect(res.status).to.equal(notFound);
        expect(data);
        done();
      });
  });

  it("Should return 200 if a permission was updated successfully", (done) => {
    api
      .patch("/sis/v1/edu/permissions/1")
      .set(
        "Authorization",
        `Bearer ${credentials.eBindSuperAdminToken.accessToken}`
      )
      .send(updatePermission)
      .end((err, res) => {
        const { data } = res.body;
        expect(res.status).to.equal(ok);
        expect(data);
        done();
      });
  });
  it("Should return 200 if a permission was deleted successfully", (done) => {
    api
      .delete("/sis/v1/edu/permissions/1")
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
