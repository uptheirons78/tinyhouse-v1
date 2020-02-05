const express = require("express");
const app = express();
const PORT = 9000;

app.get("/", (req, res) => res.send("TinyHouse Project"));

app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));
