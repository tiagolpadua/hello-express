const supertest = require("supertest");

const app = require("../src/app");
const request = supertest(app);

describe("Home", () => {
  test("URL Base", async () => {
    const resp = await request.get("/");
    expect(resp.statusCode).toBe(200);
  });
});
