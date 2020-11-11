const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

const PASS_DB = "mBaUMP4vdNO8K82J";
const USER_DB = "user-poc-refresh-token";
const NAME_DB = "pocRefreshDb";

const connect_url = `mongodb+srv://${USER_DB}:${PASS_DB}@cluster0.rqkan.mongodb.net/${NAME_DB}?retryWrites=true&w=majority`;
mongoose.connect(connect_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true,
});

app.listen(3000, () => console.log("listening at port 3000"));
