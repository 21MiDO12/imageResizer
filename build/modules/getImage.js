"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImage = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const resizer_1 = require("../util/resizer");
const getImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, fs_1.existsSync)((0, path_1.resolve)(__dirname + `/../Cache`)))
        (0, fs_1.mkdirSync)((0, path_1.resolve)(__dirname + `/../Cache`));
    const imgwidth = parseInt(req.query.width);
    const imgheight = parseInt(req.query.height);
    if (imgwidth <= 0 || imgheight <= 0)
        return res.status(402).send("Bad Size...");
    if (isNaN(imgwidth) && isNaN(imgheight))
        return res.status(402).send("Please Specify Required Size");
    return res.sendFile(yield (0, resizer_1.resizer)((0, path_1.resolve)(__dirname + `/../Images/${req.query.image}.jpg`), req.query.image, imgwidth, imgheight));
});
exports.getImage = getImage;
