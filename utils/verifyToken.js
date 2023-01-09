import jwt from 'jsonwebtoken';
import { createErorr } from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cokkies.access_token;
  if (!token) return next(createErorr('no auth', 401));

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createErorr('token no valid', 403));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createErorr('no auth', 403));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createErorr('no admin', 403));
    }
  });
};
