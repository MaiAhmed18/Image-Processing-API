import express from 'express';
import fs from 'fs';
import FileHandling from './../../fileHandling';

const images: express.Router = express.Router();

images.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const fileName = req.query.filename as unknown as string;
    const width = req.query.width as unknown as string;
    const height = req.query.height as unknown as string;
    let errResult: string = '';
    let sentFileResult: string = '';
    let w: number = 0;
    let h: number = 0;
    if (fileName == null || fileName == 'undefined') {
      const value = await FileHandling.getFullImages();
      errResult =
        "The file name parameter (?filename=) wasn't provided. Please add one of these files' names: " +
        value;
    } else {
      const fileDir: string = './assets/full/' + fileName + '.jpg';
      const imageThumbPath: string = await FileHandling.imagePath(
        fileName,
        width,
        height
      );

      //Check if the provided filename exists in the Full directory
      if (fs.existsSync(fileDir)) {
        //Check if the provided width and height are positive
        if (width != null && width != 'undefined') {
          w = Number(width);
          if (Number.isNaN(w) || w < 1) {
            errResult =
              "The width parameter isn't a positive value. Please provide a positive value and try again.";
          }
        }
        if (height != null && height != 'undefined') {
          h = Number(height);
          if (Number.isNaN(h) || h < 1) {
            errResult =
              "The height parameter isn't a positive value. Please provide a positive value and try again.";
          }
        }
        //Check cach data then resize
        if (!errResult) {
          if (fs.existsSync(imageThumbPath)) {
            sentFileResult = imageThumbPath;
          } else {
            sentFileResult = await FileHandling.resizeImage(
              fileDir,
              w,
              h,
              imageThumbPath
            );
          }
        }
      } else {
        const value = await FileHandling.getFullImages();
        errResult =
          "The file doesn't exists. Available file names are: " + value;
      }
    }

    if (errResult) {
      res.send(errResult);
    } else if (sentFileResult) {
      res.sendFile(sentFileResult);
    }
  }
);

export default images;
