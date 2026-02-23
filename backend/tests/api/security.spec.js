const request = require("supertest");
const { expect } = require("chai");
const jwt = require("jsonwebtoken");
const app = require("../../src/app.js");

describe("API security baseline", () => {
  it("GET /api/health should return 200", async () => {
    const response = await request(app).get("/api/health");

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("status", "ok");
  });

  it("GET /api/client without token should return 401", async () => {
    const response = await request(app).get("/api/client");

    expect(response.status).to.equal(401);
  });

  it("POST /api/login remains public", async () => {
    const response = await request(app).post("/api/login").send({});

    expect(response.status).to.equal(400);
    expect(response.body).to.have.property("errors");
  });

  it("POST /api/salesman with seller token should return 403", async () => {
    const sellerToken = jwt.sign(
      { id: "fake-user", role: "seller", exp: Math.floor(Date.now() / 1000) + 3600 },
      process.env.JWT_SECRET
    );

    const response = await request(app)
      .post("/api/salesman")
      .set("Authorization", `Bearer ${sellerToken}`)
      .send({});

    expect(response.status).to.equal(403);
  });

  it("POST /api/salesman with admin token should pass role gate", async () => {
    const adminToken = jwt.sign(
      { id: "fake-user", role: "admin", exp: Math.floor(Date.now() / 1000) + 3600 },
      process.env.JWT_SECRET
    );

    const response = await request(app)
      .post("/api/salesman")
      .set("Authorization", `Bearer ${adminToken}`)
      .send({});

    expect(response.status).to.not.equal(403);
  });
});
