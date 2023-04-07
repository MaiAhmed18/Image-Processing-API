import { promises as fsPromises } from 'fs';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

class FileHandling {
  fileName?: string;
  width?: string;
  height?: string;
  static thumbPath: string = path.resolve(__dirname, '../assets/thumb');
  static fullPath: string = path.resolve(__dirname, '../assets/full');

  //Get the resized image path
  static async imagePath(
    fileName?: string,
    width?: string,
    height?: string
  ): Promise<string> {
    let outPath: string;
    if (fileName && width && height) {
      outPath =
        FileHandling.thumbPath +
        path.sep +
        fileName +
        '_w_' +
        width +
        '_h_' +
        height +
        '.jpg';
    } else if (fileName && width) {
      outPath =
        FileHandling.thumbPath + path.sep + fileName + '_w_' + width + '.jpg';
    } else if (fileName && height) {
      outPath =
        FileHandling.thumbPath + path.sep + fileName + '_h_' + height + '.jpg';
    } else {
      outPath = FileHandling.thumbPath + path.sep + fileName + '.jpg';
    }
    return outPath;
  }

  //Get the full directory files names
  static async getFullImages(): Promise<string> {
    let fileNames: string = '';
    await fs.readdirSync(FileHandling.fullPath).forEach((file) => {
      try {
        file = file.substring(0, file.lastIndexOf('.jpg'));
        fileNames = fileNames + file + ' - ';
      } catch {
        fileNames = "Couldn't get any files.   ";
      }
    });
    fileNames = fileNames.substring(0, fileNames.length - 3);
    return fileNames;
  }

  //Check if the Thumb directory exist
  static async checkThumb(): Promise<void> {
    if (fs.existsSync(FileHandling.thumbPath)) {
      console.log('Directory exists!');
    } else {
      fsPromises.mkdir(FileHandling.thumbPath);
    }
  }
  //Get the resized image
  static async resizeImage(
    fileDir: string,
    width: number,
    height: number,
    imageThumbPath: string
  ): Promise<string> {
    try {
      if (width && height) {
        await sharp(fileDir).resize(width, height).toFile(imageThumbPath);
      } else if (width) {
        await sharp(fileDir).resize({ width: width }).toFile(imageThumbPath);
      } else if (height) {
        await sharp(fileDir).resize({ height: height }).toFile(imageThumbPath);
      } else {
        await sharp(fileDir).toFile(imageThumbPath);
      }
      return imageThumbPath;
    } catch (err) {
      return '';
    }
  }
}

export default FileHandling;
