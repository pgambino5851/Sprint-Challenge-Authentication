const request = require("supertest");

const server = require("../api/server")

describe("GET  /api/jokes", function() {
    it("should return 200 OK when not using Authorization middleware", function() {
        return request(server)
        .get("/api/jokes")
        .then(res => {
            expect(res.status).toBe(200);
        })
    });

    it("should return jokes as the router value", function() {
        return request(server)
        .get("/api/jokes")
        .then(res => {
            expect(Array.isArray(res.body)).toBe(true)
        })
    })
})
