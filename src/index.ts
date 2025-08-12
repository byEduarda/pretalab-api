import express from "express";
import { transactions } from "./data";
import { getTransactionById } from "./controller/transaction";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Transactions API" });
});

app.get("/transactions", (_req, res) => {
  res.json({ transactions });
});

app.post("/ai", async (req, res) => {
  const { text } = req.body;

  res.json({ text: "teste"});
});

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
export default app;
=======
app.get("/transactions/:id", getTransactionById);


export default app;
>>>>>>> Stashed changes
=======
app.get("/transactions/:id", getTransactionById);


export default app;
>>>>>>> Stashed changes
=======
app.get("/transactions/:id", getTransactionById);


export default app;
>>>>>>> Stashed changes
