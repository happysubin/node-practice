import express from "express";

const app = express();

app.get(
  "/",
  (req, res, next) => {
    console.log("first");
    next();
  },
  (req, res, next) => {
    console.log("first2");
    next();
  }
);

app.use("/user/:id", (req, res) => {
  console.log(req.query);
  console.log(req.params.id);
  res.setHeader("key", "value");
  //res.sendStatus(400);
  res.json({ name: "hello" });
  //res.status(200).send("hi");
});

app.use((err, req, res, next) => {
  console.log(error);
  res.status(500).send("sorry,try later");
});
app.listen("3000");
//ip
//port
