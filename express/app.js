import express from "express";
import fs, { fstatSync } from "fs";

const app = express();

app.use(express.json()); //이 미들웨어를 통해 req.body 사용가능!!!

app.post("/", (req, res) => {
  console.log(req.body);
});

app.get("/file1", (req, res) => {
  try {
    const data = fs.readFileSync("text1.txt");
    res.send(data);
  } catch {
    res.sendStatus(404);
  }
});

app.get("/file2", (req, res) => {
  fs.promises
    .readFile("text2.txt")
    .then((data) => res.send(data))
    .catch((error) => res.sendStatus(404));
});

app.get("/file3", async (req, res) => {
  try {
    const data = await fs.promises.readFile("file3.txt");
    res.send(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
});

app.use((err, req, res, next) => {
  console.log(error);
  res.status(500).send("sorry,try later");
});

app.listen("3000");
