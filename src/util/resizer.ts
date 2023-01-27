import sharp from 'sharp';
import { resolve } from 'path';
import { existsSync } from 'fs';

export const resizer = async (
  path: string,
  imageName: string,
  width: number,
  height: number
): Promise<string> => {
  if (isNaN(width)) {
    try {
      if (
        !existsSync(resolve(__dirname + `/../Cache/${imageName}h${height}.jpg`))
      )
        await sharp(__dirname + `/../Images/${imageName}.jpg`)
          .resize({ height: height })
          .toFile(__dirname + `/../Cache/${imageName}h${height}.jpg`);

      return resolve(__dirname + `/../Cache/${imageName}h${height}.jpg`);
    } catch (err) {
      console.error(err);
      return '';
    }
  } else if (isNaN(height)) {
    try {
      if (
        !existsSync(resolve(__dirname + `/../Cache/${imageName}w${width}.jpg`))
      )
        await sharp(__dirname + `/../Images/${imageName}.jpg`)
          .resize({ width: width })
          .toFile(__dirname + `/../Cache/${imageName}w${width}.jpg`);

      return resolve(__dirname + `/../Cache/${imageName}w${width}.jpg`);
    } catch (err) {
      console.error(err);
      return '';
    }
  } else {
    try {
      if (
        !existsSync(
          resolve(__dirname + `/../Cache/${imageName}w${width}h${height}.jpg`)
        )
      )
        await sharp(__dirname + `/../Images/${imageName}.jpg`)
          .resize({ width: width, height: height })
          .toFile(__dirname + `/../Cache/${imageName}w${width}h${height}.jpg`);

      return resolve(
        __dirname + `/../Cache/${imageName}w${width}h${height}.jpg`
      );
    } catch (err) {
      console.error(err);
      return '';
    }
  }
};
