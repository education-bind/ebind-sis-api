import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../src/app.js";
import statusCode from "../../src/utils/statusCodes";
import { eBindSuperAdmin } from "../mockData/usersMockData.js";

const { ok } = statusCode;

chai.use(chaiHttp);
const api = chai.request(server).keepOpen();
const { expect } = chai;

let credentials = {
  eBindSuperAdminToken: null,
};

describe("Tests Authorization", () => {
  it("Should return 200 status with Access and refresh token for ebind super admin", (done) => {
    api
      .post("/v1/edu/auth/login")
      .send(eBindSuperAdmin)
      .end((err, res) => {
        const { status, data } = res.body;
        credentials.eBindSuperAdminToken = data.tokens;
        expect(res.status).to.equal(ok);
        expect(status).to.equal("success");
        expect(data);
        done();
      });
  });
});

export default credentials;
