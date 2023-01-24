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
const supertest_1 = __importDefault(require("supertest"));
const __1 = __importDefault(require(".."));
const req = (0, supertest_1.default)(__1.default);
describe("Testing api", () => {
    try {
        it("Testing accessing the server http://localhost:1234", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield req.get('/');
            expect(res.status).toBe(200);
        }));
        it("Testing unValidAPI usage by NOT giving an image to get", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield req.get('/GetMyImage');
            expect(res.status).toBe(400);
        }));
        it("Testing usage of the demo api (http://localhost:1234/GetMyImage?image=yourImageName&&width=yourSize&&height=yourSize)", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield req.get('/GetMyImage?image=yourImageName&&width=yourSize&&height=yourSize');
            expect(res.status).toBe(402);
        }));
        it("Testing geting lara.jpg with invalid size (http://localhost:1234/GetMyImage?image=lara&&width=yourSize&&height=yourSize)", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield req.get('/GetMyImage?image=lara&&width=yourSize&&height=yourSize');
            expect(res.status).toBe(200);
        }));
    }
    catch (err) {
        console.error(err);
    }
});
