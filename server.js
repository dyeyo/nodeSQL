var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// include database config file
const db = require("./config/config");
const PORT = 8081
// force: true will drop the table if it already exists
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and Resync with { force: true }");
});

require("./router/book.router")(app);
require("./router/user.router")(app);

// Create & Listen Server
app.listen(PORT, function () {
  console.log("Application runing in port", PORT);
});