import { Router } from 'express';
import { registerSchema } from '../validation';
import { User } from '../models';
import { logIn } from '../auth';
import { guest, catchAsync } from '../middleware';
const router = Router();

router.get('/', (req, res) => res.json({ message: 'get OK' }));
router.post(
  '/register',
  guest,
  catchAsync(async (req, res) => {
    await registerSchema.validateAsync(req.body, { abortEarly: false });

    const { email, name, password } = req.body;

    const found = await User.exists({ email });
    console.log(`found ${found}`);
    if (found) {
      throw new Error('Invalid email');
    }
    const user = await User.create({
      email,
      name,
      password,
    });

    logIn(req, user.id);
    res.json({ message: 'OK' });
  }),
);

export default router;
