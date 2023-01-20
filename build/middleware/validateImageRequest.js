"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateImageAPI = void 0;
const validateImageAPI = (req, res, next) => {
    if (req.query.image === undefined || req.query.image === null || req.query.image === '') {
        return res.status(400).send("Bad Request...");
    }
    next();
};
exports.validateImageAPI = validateImageAPI;
