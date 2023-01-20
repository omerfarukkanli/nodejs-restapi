require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", (error) => console.log("connected to database"));
app.use(express.json());

const subscriberRouter = require("./routes/subscribers");
app.use("/subscribers", subscriberRouter);

app.listen(3000, () => {
  console.log("success");
});
