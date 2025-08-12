import request from "supertest";
import app from "../../src/index";
import * as transactionService from "../../src/service/transactions";
import { Transaction } from "../../src/data";

describe("GET /transactions/:id - Unit", () => {
  it("deve retornar 404 se não encontrar a transação", async () => {
    jest.spyOn(transactionService, "transactionById").mockReturnValue(undefined);

    const res = await request(app).get("/transactions/123");
    expect(res.status).toBe(404);
    expect(res.body.message).toBe("Transaction not found");
  });

  it("deve retornar a transação se encontrada", async () => {
    const mockTransaction: Transaction = {
      id: "123",
      date: "2025-08-11T10:00:00Z",
      description: "Compra de teste",
      amount: 100,
      type: "expense",
      category: "Testes"
    };

    jest.spyOn(transactionService, "transactionById").mockReturnValue(mockTransaction);

    const res = await request(app).get("/transactions/123");
    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockTransaction);
  });
});
