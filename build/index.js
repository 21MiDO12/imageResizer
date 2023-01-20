"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getMyImage_1 = require("./routes/getMyImage");
const app = (0, express_1.default)();
const port = 1234;
app.get('/', (req, res) => {
    res.send(`Use http://localhost:1234/GetMyImage?image=yourImageName&&width=yourSize&&height=yourSize 
to get your desired image with the desired size`);
});
app.use('/GetMyImage', getMyImage_1.GetMyImage);
app.listen(port, () => console.log(`Server is running on http://localhost:1234`));
exports.default = app;
