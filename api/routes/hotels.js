import express from 'express';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
  countByCity,
  countByType,
  getHotelRooms,
} from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/', verifyAdmin, createHotel);

router.put('/:id', verifyAdmin, updateHotel);

router.delete('/find/:id', verifyAdmin, deleteHotel);

router.get('/:id', getHotel);

router.get('/', getAllHotel);

router.get('/count/countByCity', countByCity);

router.get('/count/countByType', countByType);

router.get('/room/:id', getHotelRooms);

export default router;
