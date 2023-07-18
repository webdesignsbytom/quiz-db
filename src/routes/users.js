import { Router } from 'express';
import {
  getAllUsers,
  postNewScore,
} from '../controllers/users.js';

const router = Router();

router.get('/all-users', getAllUsers);
router.post('/post-score', postNewScore);

export default router;
