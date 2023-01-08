import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import hotelsRoutes from './routes/hotels.js';
import roomsRoutes from './routes/rooms.js';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('connectoed to mongodb');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('mongodb disconnected');
});

mongoose.connection.on('connected', () => {
  console.log('mongodb connected');
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

// middleware
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', usersRoutes);
app.use('/api/hotels', hotelsRoutes);
app.use('/api/rooms', roomsRoutes);

app.listen(8800, () => {
  connect();
  console.log('Server is running on port 8800');
});
