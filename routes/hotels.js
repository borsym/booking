import express from 'express';
import Hotel from '../models/Hotel.js';
import { createErorr } from '../utils/error.js';
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from '../controllers/hotel.js';

const router = express.Router();

router.post('/', createHotel);

router.put('/:id', updateHotel);

router.delete('/:id', deleteHotel);

router.get('/:id', getHotel);

router.get('/', getAllHotel);

export default router;
