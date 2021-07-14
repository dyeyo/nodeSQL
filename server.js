var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const db = require("./config/config");
const PORT = 8081
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and Resync with { force: true }");
});

require("./router/book.router")(app);
require("./router/user.router")(app);
require("./router/auth.router")(app);

// Create & Listen Server
app.listen(PORT, function () {
  console.log("Application runing in port", PORT);
});