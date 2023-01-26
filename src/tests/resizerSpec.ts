import { resizer } from "../util/resizer";
import {resolve } from "path";

describe("Testing resizing module", () =>
{
    try
    {
        it("Testing passing image without size",
        async() =>
        {
            expect(await resizer(resolve(__dirname + `/../Images/lara.jpg`),'lara',NaN,NaN)).toBeFalsy();
        })

        it("Testing passing image without height",
        async() =>
        {
            expect(await resizer(resolve(__dirname + `/../Images/lara.jpg`),'lara',250,NaN)).toBe(
                resolve(__dirname + `/../Cache/laraw250.jpg`));
        })

        it("Testing passing image without width",
        async() =>
        {
            expect(await resizer(resolve(__dirname + `/../Images/lara.jpg`),'lara',NaN,250)).toBe(
                resolve(__dirname + `/../Cache/larah250.jpg`));
        })

        it("Testing passing image with size",
        async() =>
        {
            expect(await resizer(resolve(__dirname + `/../Images/lara.jpg`),'lara',250,250)).toBe(
                resolve(__dirname + `/../Cache/laraw250h250.jpg`));
        })
    }
    catch (err)
    {
        console.log(err);
    }
})