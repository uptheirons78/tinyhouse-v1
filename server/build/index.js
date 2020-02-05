"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = 9000;
// example of Typescript Var
const one = 1;
app.get("/", (req, res) => res.send("TinyHouse Project"));
app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));
