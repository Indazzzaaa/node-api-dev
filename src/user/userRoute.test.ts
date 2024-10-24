import request from "supertest";
import app from "../main";

describe("GET: User API Tests", () => {
  it("should return list of users", async () => {
    const res = await request(app).get("/users/");
    expect(res.statusCode).toEqual(200);
  });

  it("should return user by id", async () => {
    const res = await request(app).get("/users/123");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("id", 123);
    expect(res.body).toHaveProperty("emailID");
  });

  it("should return current user", async () => {
    const res = await request(app).get("/users/me");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("id", "me");
    expect(res.body).toHaveProperty("username");
    expect(res.body).toHaveProperty("password");
  });
});
