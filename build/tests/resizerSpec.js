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
const resizer_1 = require("../util/resizer");
const path_1 = require("path");
describe("Testing resizing module", () => {
    try {
        it("Testing passing image without size", () => __awaiter(void 0, void 0, void 0, function* () {
            expect(yield (0, resizer_1.resizer)((0, path_1.resolve)(__dirname + `/../Images/lara.jpg`), 'lara', NaN, NaN)).toBe((0, path_1.resolve)(__dirname + `/../Images/lara.jpg`));
        }));
        it("Testing passing image without height", () => __awaiter(void 0, void 0, void 0, function* () {
            expect(yield (0, resizer_1.resizer)((0, path_1.resolve)(__dirname + `/../Images/lara.jpg`), 'lara', 250, NaN)).toBe((0, path_1.resolve)(__dirname + `/../Cache/laraw250.jpg`));
        }));
        it("Testing passing image without width", () => __awaiter(void 0, void 0, void 0, function* () {
            expect(yield (0, resizer_1.resizer)((0, path_1.resolve)(__dirname + `/../Images/lara.jpg`), 'lara', NaN, 250)).toBe((0, path_1.resolve)(__dirname + `/../Cache/larah250.jpg`));
        }));
        it("Testing passing image with size", () => __awaiter(void 0, void 0, void 0, function* () {
            expect(yield (0, resizer_1.resizer)((0, path_1.resolve)(__dirname + `/../Images/lara.jpg`), 'lara', 250, 250)).toBe((0, path_1.resolve)(__dirname + `/../Cache/laraw250h250.jpg`));
        }));
    }
    catch (err) {
        console.log(err);
    }
});
