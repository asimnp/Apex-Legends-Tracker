const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

// Load env
dotenv.config({ path: "./config.env" });

// Express Init
const app = express();

// Dev logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Profile route
app.use("/api/v1/profile", require("./routes/profile"));

// Port & Listen
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}...`
  );
});
