const request = require("supertest");

const server = require("../api/server.js");

describe("POST /api/auth/register", function() {
    it("should return 200 OK with username and password", function() {
        return request(server)
        .post("/api/auth/register")
        .send({username: `${Math.random()}`,
              password: "pass"
        })
        .then(res => {
            expect(res.status).toBe(201);
        })
    })

    it("should return 500 error if you try to register with an already existing username", function() {
        return request(server)
          .post("/api/auth/register")
          .send({username: `${Math.random()}`,
              password: "pass"
            })
          .then(res => {
            expect(res.type).toMatch(/json/);
          });
      });
})

describe("POST /api/auth/login", function() {
    it("should return 200 OK with existing username and password", function() {
        return request(server)
        .post("/api/auth/login")
        .send({username: "Peter", 
               password: "pass"   
        })
        .then(res => {
            expect(res.status).toBe(200)
        })
    })

    it("should return 401 if you try to login with invalid credentials", function() {
        return request(server)
        .post("/api/auth/login")
        .send({username: "fakeuser", 
               password: "fakepass"      
        })
        .then(res => {
            expect(res.status).toBe(401)
        })
    })
})