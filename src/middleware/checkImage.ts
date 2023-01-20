import { Request, Response, NextFunction } from "express";
import { existsSync , mkdirSync} from "fs";
import {resolve} from 'path';

export const checkImage = (req : Request, res : Response , next : NextFunction) =>
{
    if (!existsSync(resolve(__dirname + `/../Images`)))
    {
//        return res.status(500).send("Sorry Server Error\n\nDir Doesn't Exists");
        mkdirSync(resolve(__dirname + `/../Images`));
    }
    
    if (!existsSync(resolve(__dirname + `/../Images/${req.query.image}.jpg`)))
    {
        return res.status(402).send(`No such file called ${req.query.image}`);
    }

    next();
}