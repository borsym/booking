import express from 'express';
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getAllRoom,
  getRoom,
} from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/:hotelid', verifyAdmin, createRoom);

router.put('/:id', verifyAdmin, updateRoom);

router.delete('/:id', verifyAdmin, deleteRoom);

router.get('/:id', getRoom);

router.get('/', getAllRoom);
export default router;
