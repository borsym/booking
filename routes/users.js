import express from 'express';
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
} from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkauth', verifyToken, (req, res, next) => {
//   res.send('auth good');
// });

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('auth good admin');
// });

router.put('/:id', verifyUser, updateUser);

router.delete('/:id', verifyUser, deleteUser);

router.get('/:id', verifyUser, getUser);

router.get('/', verifyAdmin, getAllUser);
export default router;
