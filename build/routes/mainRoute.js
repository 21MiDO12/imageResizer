"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRoute = void 0;
const express_1 = require("express");
const mainRoute = (0, express_1.Router)();
exports.mainRoute = mainRoute;
mainRoute.get('/', (req, res) => {
    res.send(`Use http://localhost:1234/GetMyImage?image=yourImageName&&width=yourSize&&height=yourSize 
    to get your desired image with the desired size`);
});
