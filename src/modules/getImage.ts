import { Request,Response } from "express";
import {resolve} from 'path';
import { mkdirSync , existsSync} from "fs";
import { resizer } from "../util/resizer";

export const getImage = async (req : Request, res : Response) =>
{
    if (!existsSync(resolve(__dirname + `/../Cache`)))
        mkdirSync(resolve(__dirname + `/../Cache`));

    const imgwidth: number = parseInt((req.query.width as unknown) as string);
    const imgheight: number = parseInt((req.query.height as unknown) as string);

    if (imgwidth == 0 || imgheight == 0)
        return res.status(402).send("Bad Size...");

    return res.sendFile(await resizer(resolve(__dirname + `/../Images/${req.query.image}.jpg`),req.query.image as string
    ,imgwidth,imgheight));
}