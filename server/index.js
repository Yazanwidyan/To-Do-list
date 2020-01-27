const express = require("express");
const mongoose = require("mongoose");
const port = 3001;
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");


app.listen(3000)


mongoose.connect("mongodb+srv://Yazan:KxE3zAAO6p3L7nmD@cluster0-lzxio.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

let db = mongoose.connection;

db.on("error", error => console.log(error));
db.once("open", () => console.log("mongoose connected successfully"));

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: String
  })
);

const TodoList = mongoose.model(
  "Todo",
  new mongoose.Schema({
    name: String,
    done: Boolean,
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  })
);

app.post("/signup", (req, res) => {
  const newUser = new User(req.body);
  newUser.save(err => {
    if (err) console.log(err);
    console.log("Saved");
  });
  res.sendStatus(502);
});

app.get("/todos", (req, res) => {
  //
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
