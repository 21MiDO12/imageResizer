"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkImage = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const checkImage = (req, res, next) => {
    if (!(0, fs_1.existsSync)((0, path_1.resolve)(__dirname + `/../Images`))) {
        //        return res.status(500).send("Sorry Server Error\n\nDir Doesn't Exists");
        (0, fs_1.mkdirSync)((0, path_1.resolve)(__dirname + `/../Images`));
    }
    if (!(0, fs_1.existsSync)((0, path_1.resolve)(__dirname + `/../Images/${req.query.image}.jpg`))) {
        return res.status(402).send(`No such file called ${req.query.image}`);
    }
    next();
};
exports.checkImage = checkImage;
