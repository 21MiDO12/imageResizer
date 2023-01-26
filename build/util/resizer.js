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
exports.resizer = void 0;
const sharp_1 = __importDefault(require("sharp"));
const path_1 = require("path");
const fs_1 = require("fs");
const resizer = (path, imageName, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    if (isNaN(width)) {
        try {
            if (!(0, fs_1.existsSync)((0, path_1.resolve)(__dirname + `/../Cache/${imageName}h${height}.jpg`)))
                yield (0, sharp_1.default)(__dirname + `/../Images/${imageName}.jpg`).resize({ height: height })
                    .toFile(__dirname + `/../Cache/${imageName}h${height}.jpg`);
            return (0, path_1.resolve)(__dirname + `/../Cache/${imageName}h${height}.jpg`);
        }
        catch (err) {
            console.error(err);
            return "";
        }
    }
    else if (isNaN(height)) {
        try {
            if (!(0, fs_1.existsSync)((0, path_1.resolve)(__dirname + `/../Cache/${imageName}w${width}.jpg`)))
                yield (0, sharp_1.default)(__dirname + `/../Images/${imageName}.jpg`).resize({ width: width })
                    .toFile(__dirname + `/../Cache/${imageName}w${width}.jpg`);
            return (0, path_1.resolve)(__dirname + `/../Cache/${imageName}w${width}.jpg`);
        }
        catch (err) {
            console.error(err);
            return "";
        }
    }
    else {
        try {
            if (!(0, fs_1.existsSync)((0, path_1.resolve)(__dirname + `/../Cache/${imageName}w${width}h${height}.jpg`)))
                yield (0, sharp_1.default)(__dirname + `/../Images/${imageName}.jpg`).resize({ width: width, height: height })
                    .toFile(__dirname + `/../Cache/${imageName}w${width}h${height}.jpg`);
            return (0, path_1.resolve)(__dirname + `/../Cache/${imageName}w${width}h${height}.jpg`);
        }
        catch (err) {
            console.error(err);
            return "";
        }
    }
});
exports.resizer = resizer;
