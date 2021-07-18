var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const db = require("./config/config");
const PORT = 8081
const AuthRouter = require('./router/auth.router');
const BaseRouter = require('./router');

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync with { force: true }");
});

app.use('/auth', AuthRouter);
app.use('/api', BaseRouter);

// Create & Listen Server
app.listen(PORT, function () {
  console.log("Application runing in port", PORT);
});