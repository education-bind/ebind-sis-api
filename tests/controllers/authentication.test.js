import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../src/app.js";
import statusCode from "../../src/utils/statusCodes";
import { eBindSuperAdmin } from "../mockData/usersMockData.js";
import mockData from "../mockData/mockData.js";
import credentials from "../config/authorizationConfig.test.js";

const { ok, unAuthorized } = statusCode;
mockData.countryData;

chai.use(chaiHttp);
const api = chai.request(server).keepOpen();
const { expect } = chai;

describe("Authentication", () => {
  let loginToken;
  let refreshToken;

  it("Should return 401 status if refresh token is missing", (done) => {
    api.post("/api/v1/refreshToken").end((err, res) => {
      const { message } = res.body;
      expect(res.status).to.equal(unAuthorized);
      expect(message);
      done();
    });
  });

  it("Should return 200 status if Login was successful", (done) => {
    api
      .post("/api/v1/edu/auth/login")
      .send(eBindSuperAdmin)
      .end((err, res) => {
        const { data } = res.body;
        loginToken = data.tokens.accessToken;
        refreshToken = data.tokens.refreshToken;
        done();
      });
  });

  it("Should return 200 status if Request for refresh token was successful", (done) => {
    api
      .post("/api/v1/refreshToken")
      .send({ token: refreshToken })
      .end((err, res) => {
        console.log(refreshToken, 'dynamite:', res.body,)
        const { data } = res.body;
        expect(res.status).to.equal(ok);
        expect(data);
        done();
      });
  });

  it("Should return 200 status if Logout was successful", (done) => {
    api
      .get("/api/v1/edu/auth/logout")
      .set("Authorization", `Bearer ${loginToken}`)
      .end((err, res) => {
        const { message } = res.body;
        expect(res.status).to.equal(ok);
        expect(message);
        done();
      });
  });

  it("Should return 401 status if access token is missing", (done) => {
    api.get("/api/v1/edu/auth/logout").end((err, res) => {
      const { message } = res.body;
      expect(res.status).to.equal(unAuthorized);
      expect(message);
      done();
    });
  });

  it("Should return 401 status if you Logout with expired token", (done) => {
    api
      .get("/api/v1/edu/auth/logout")
      .set("Authorization", `Bearer ${loginToken}`)
      .end((err, res) => {
        const { message } = res.body;
        expect(res.status).to.equal(unAuthorized);
        expect(message);
        done();
      });
  });
});
