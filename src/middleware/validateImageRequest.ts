import { Request, Response, NextFunction } from "express";

export const validateImageAPI = (req : Request,res : Response , next : NextFunction) =>
{
    if (req.query.image === undefined || req.query.image === null || req.query.image === '')
    {
        return res.status(400).send("Bad Request...");
    }

    next();
}