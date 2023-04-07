import supertest from 'supertest';
import app from '../index';
import path from 'path';
import { promises as fsPromises } from 'fs';
import FileHandling from './../fileHandling';

//Test the endpoints
const request = supertest(app);
describe('Test main endpoint responses', (): void => {
  it('gets the api endpoint', async (): Promise<void> => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});

describe('Test endpoint responses: /api/images', (): void => {
  it('gets /api/images?filename=palmtunnel', async (): Promise<void> => {
    const response = await request.get('/api/images?filename=palmtunnel');
    expect(response.status).toBe(200);
  });
});

describe('Test endpoint responses: /api/images?filename=palmtunnel', (): void => {
  it('gets /api/images?filename=palmtunnel&width=300&height=200 with width and height', async (): Promise<void> => {
    const response = await request.get(
      '/api/images?filename=palmtunnel&width=300&height=200'
    );
    expect(response.status).toBe(200);
  });
});

describe('Test with unexisted filename endpoint responses: /api/images?filename=test', (): void => {
  it('gets /api/images?filename=test', async (): Promise<void> => {
    const response = await request.get('/api/images?filename=test');
    expect(response.status).toBe(200);
  });
});

describe('Test Invalid parameters endpoint responses: /api/images?filename=palmtunnel', (): void => {
  it('gets /api/images?filename=palmtunnel&width=-300&height=test', async (): Promise<void> => {
    const response = await request.get(
      '/api/images?filename=palmtunnel&width=-300&height=test'
    );
    expect(response.status).toBe(200);
  });
});

describe('Test without params: /api/images?filename=palmtunnel', (): void => {
  it('gets /api/images', async (): Promise<void> => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
  });
});

//Test Image processing function itself
describe('Test image processing via sharp', (): void => {
  it('raises the path of the resized image', async (): Promise<void> => {
    const path: null | string = await FileHandling.resizeImage(
      './assets/full/palmtunnel.jpg',
      100,
      500,
      await FileHandling.imagePath('palmtunnel', '100', '500')
    );
    expect(path).not.toEqual('');
  });
});

describe('Test image processing via sharp', (): void => {
  it('raises empty path (file does not exist)', async (): Promise<void> => {
    const path: null | string = await FileHandling.resizeImage(
      './assets/full/test.jpg',
      100,
      500,
      await FileHandling.imagePath('test', '100', '500')
    );
    expect(path).toEqual('');
  });
});

afterAll(async (): Promise<void> => {
  const resizedImage1: string = path.resolve(
    FileHandling.thumbPath,
    'palmtunnel_w_300_h_200.jpg'
  );
  const resizedImage2: string = path.resolve(
    FileHandling.thumbPath,
    'palmtunnel_w_100_h_500.jpg'
  );
  const resizedImage3: string = path.resolve(
    FileHandling.thumbPath,
    'palmtunnel.jpg'
  );
  try {
    await fsPromises.access(resizedImage1);
    fsPromises.unlink(resizedImage1);
    await fsPromises.access(resizedImage2);
    fsPromises.unlink(resizedImage2);
    await fsPromises.access(resizedImage3);
    fsPromises.unlink(resizedImage3);
  } catch {
    console.log('');
  }
});
