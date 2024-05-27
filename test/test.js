//テスト諦めた

// const chai= require("chai");
// const chaiHttp = require("chai-http");
// const express = require("express");
// const knex = require("knex");
// chai.use(chaiHttp);
// const knexConfig = require("../knexfile");

// function setUpServer() {
//   const app = express();
//   const db = knex(knexConfig["development"]);

//   app.post("/scores", async (req, res) => {
//     const body = req.body;
//     await db("scores").insert(body);
//     res.status(201).send();
//   });
//   app.listen(3000, () => {});
//   return app;
// }

// describe("server", () => {
//   let request;
//   beforeEach(() => {
//     const server = setUpServer();
//     request = chai.request(server).keepOpen();
//   });

//   afterEach(() => {
//     request.close();
//   });
//   describe("サーバーテスト", () => {
//     it("一人目のプレイヤーを返す", (done) => {
//       request.get("/player").end((err, res) => {
//         chai.expect(err).to.be.null;
//       });
//     });
//   });
// });
