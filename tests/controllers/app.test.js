import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../src/app.js";
import statusCode from "../../src/utils/statusCodes";
import messages from "../../src/utils/customMessages";

const { endpointNotFound } = messages;
const { notFound } = statusCode;

chai.use(chaiHttp);
const api = chai.request(server).keepOpen();
const { expect } = chai;

describe("Global app operations", () => {
  it("Should return 404 status for page not found", (done) => {
    api.get("/notfound").end((err, res) => {
      const { status, message } = res.body;
      expect(res.status).to.equal(notFound);
      expect(status).to.equal("fail");
      expect(message).to.equal(endpointNotFound);
      done();
    });
  });
});
