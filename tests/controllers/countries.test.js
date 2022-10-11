import chai from "chai";
import chaiHttp from "chai-http";
import db from "../../src/database/models/index.js";
import server from "../../src/app.js";

const countries = db["countries"];

chai.use(chaiHttp);
const api = chai.request(server).keepOpen();
const { expect } = chai;

describe("User sign up", () => {
  it("Should return 422 for the password is greater than 8 long", (done) => {
    const user = {
      firstName: "Eddy",
      lastName: "Uwambaje",
      username: "Eddy",
      email: "uwambaqje1@gmail.com",
      password: "uwambajeee",
      repeat_password: "uwambajeee",
      phoneNumber: "0785058050",
      role: "requester",
    };
    api
      .post("/api/v1/user/auth/signup")
      .send(user)
      .end((err, res) => {
        const { message } = res.body;
        expect(res.status).to.equal(unProcessableEntity);
        expect(message);
        done();
      });
  });
});
