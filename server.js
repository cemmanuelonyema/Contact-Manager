const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res
    .status(200)
    .json({ msg: "Hello World, Welcome to thr Contact Manager Api" })
);

//Init Middleware  - provide the ability to use req.body
app.use(express.json({ extended: false }));

//Define Routes
app.use("/api/v1/register", require("./routes/register"));
app.use("/api/v1/contacts", require("./routes/contacts"));
app.use("/api/v1/login", require("./routes/login"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
