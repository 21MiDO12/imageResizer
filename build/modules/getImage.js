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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImage = void 0;
const sharp_1 = __importDefault(require("sharp"));
const path_1 = require("path");
const fs_1 = require("fs");
const getImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, fs_1.existsSync)((0, path_1.resolve)(__dirname + `/../Cache`)))
        (0, fs_1.mkdirSync)((0, path_1.resolve)(__dirname + `/../Cache`));
    const imgwidth = parseInt(req.query.width);
    const imgheight = parseInt(req.query.height);
    if (imgwidth == 0 || imgheight == 0)
        return res.status(402).send("Bad Size...");
    if (isNaN(imgwidth) && isNaN(imgheight)) {
        return res.sendFile((0, path_1.resolve)(__dirname + `/../Images/${req.query.image}.jpg`));
    }
    else if (isNaN(imgwidth)) {
        try {
            if (!(0, fs_1.existsSync)((0, path_1.resolve)(__dirname + `/../Cache/${req.query.image}h${imgheight}.jpg`)))
                yield (0, sharp_1.default)(`./Images/${req.query.image}.jpg`).resize({ height: imgheight })
                    .toFile(`./Cache/${req.query.image}h${imgheight}.jpg`);
            return res.sendFile((0, path_1.resolve)(__dirname + `/../Cache/${req.query.image}h${imgheight}.jpg`));
        }
        catch (err) {
            console.error(err);
        }
    }
    else if (isNaN(imgheight)) {
        try {
            if (!(0, fs_1.existsSync)((0, path_1.resolve)(__dirname + `/../Cache/${req.query.image}w${imgwidth}.jpg`)))
                yield (0, sharp_1.default)(`./Images/${req.query.image}.jpg`).resize({ width: imgwidth })
                    .toFile(`./Cache/${req.query.image}w${imgwidth}.jpg`);
            return res.sendFile((0, path_1.resolve)(__dirname + `/../Cache/${req.query.image}w${imgwidth}.jpg`));
        }
        catch (err) {
            console.error(err);
        }
    }
    else {
        try {
            if (!(0, fs_1.existsSync)((0, path_1.resolve)(__dirname + `/../Cache/${req.query.image}w${imgwidth}h${imgheight}.jpg`)))
                yield (0, sharp_1.default)(`./Images/${req.query.image}.jpg`).resize({ width: imgwidth, height: imgheight })
                    .toFile(`./Cache/${req.query.image}w${imgwidth}h${imgheight}.jpg`);
            return res.sendFile((0, path_1.resolve)(__dirname + `/../Cache/${req.query.image}w${imgwidth}h${imgheight}.jpg`));
        }
        catch (err) {
            console.error(err);
        }
    }
});
exports.getImage = getImage;
