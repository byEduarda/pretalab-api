import request from "supertest";
import app from "../../src/index";
import { transactions } from "../../src/data";

describe("GET /transactions/:id - Integration", () => {
  it("deve retornar a transação correta", async () => {
    const existing = transactions[0];
    const res = await request(app).get(`/transactions/${existing.id}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(existing.id);
  });

  it("deve retornar 404 para ID inexistente", async () => {
    const res = await request(app).get("/transactions/nao-existe");
    expect(res.status).toBe(404);
  });
});
