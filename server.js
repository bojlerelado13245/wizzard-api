import express from "express";
import router from "./routes/router.js";

const app = express();

app.use(express.json());

app.use(router);

app.listen(5500, () => {
  console.log("Server is running on port 5500");
});
