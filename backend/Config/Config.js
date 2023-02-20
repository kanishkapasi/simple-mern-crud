const mongoose = require("mongoose");

const connection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/todo")
    .then(() => {
      console.log("DB is connected");
    })
    .catch(() => {
      console.log("DB is not connected");
    });
};
module.exports = connection;
