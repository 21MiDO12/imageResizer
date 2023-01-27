import { Router } from 'express';
import { validateImageAPI } from '../middleware/validateImageRequest';
import { checkImage } from '../middleware/checkImage';
import { getImage } from '../modules/getImage';

const GetMyImage = Router();

GetMyImage.get('/', validateImageAPI, checkImage, getImage);

export { GetMyImage };
