import express from 'express';
const app = express();
const PORT = 9000;

// example of Typescript Var
const one = 1;

app.get("/", (req, res) => res.send("TinyHouse Project"));

app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));
