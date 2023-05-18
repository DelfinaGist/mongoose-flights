require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});