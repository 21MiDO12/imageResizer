import sharp from "sharp";
import { Request,Response } from "express";
import {resolve} from 'path';
import { mkdirSync , existsSync} from "fs";

export const getImage = async (req : Request, res : Response) =>
{
    if (!existsSync(resolve(__dirname + `/../Cache`)))
        mkdirSync(resolve(__dirname + `/../Cache`));

    const imgwidth: number = parseInt((req.query.width as unknown) as string);
    const imgheight: number = parseInt((req.query.height as unknown) as string);

    if (imgwidth == 0 || imgheight == 0)
        return res.status(402).send("Bad Size...");

    if (isNaN(imgwidth) && isNaN(imgheight))
    {
        return res.sendFile(resolve(__dirname + `/../Images/${req.query.image}.jpg`));
    }
    else if (isNaN(imgwidth))
    {
        try
        {
            if (!existsSync(resolve(__dirname + `/../Cache/${req.query.image}h${imgheight}.jpg`)))
                await sharp(`./Images/${req.query.image}.jpg`).resize({height:imgheight})
                .toFile(`./Cache/${req.query.image}h${imgheight}.jpg`);
            
            return res.sendFile(resolve(__dirname + `/../Cache/${req.query.image}h${imgheight}.jpg`));
        }
        catch(err)
        {
            console.error(err);
        }
    }
    else if (isNaN(imgheight))
    {
        try
        {
            if (!existsSync(resolve(__dirname + `/../Cache/${req.query.image}w${imgwidth}.jpg`)))
                await sharp(`./Images/${req.query.image}.jpg`).resize({width:imgwidth})
                .toFile(`./Cache/${req.query.image}w${imgwidth}.jpg`);

            return res.sendFile(resolve(__dirname + `/../Cache/${req.query.image}w${imgwidth}.jpg`));
        }
        catch(err)
        {
            console.error(err);
        }
    }
    else
    {
        try
        {
            if (!existsSync(resolve(__dirname + `/../Cache/${req.query.image}w${imgwidth}h${imgheight}.jpg`)))
                await sharp(`./Images/${req.query.image}.jpg`).resize({width:imgwidth,height:imgheight})
                .toFile(`./Cache/${req.query.image}w${imgwidth}h${imgheight}.jpg`);

            return res.sendFile(resolve(__dirname + `/../Cache/${req.query.image}w${imgwidth}h${imgheight}.jpg`));
        }
        catch(err)
        {
            console.error(err);
        }
    }
}