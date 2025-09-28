// src/routes/auth.routes.js
import { Router } from 'express';
import { z } from 'zod';
import { validate } from '../middleware/validate.js';
import { signup, login } from '../controllers/auth.controller.js';

const router = Router();

const signupSchema = z.object({
  body: z.object({
    email: z.string().email(),
    username: z.string().min(3),
    password: z.string().min(8),

    firstName: z.string().optional(),
    lastName: z.string().optional(),
    affiliationTags: z.array(z.string()).optional(),
    countriesExpertise: z.array(z.string()).optional(),
    countryResidence: z.string().optional(),
    organization: z.string().optional(),
    jobFunction: z.string().optional(),
  }),
  query: z.object({}).optional(),
  params: z.object({}).optional(),
});

const loginBodyByIdentifier = z.object({
  identifier: z.string().min(1),
  password: z.string().min(1),
});
const loginBodyByEmail = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});
const loginBodyByUsername = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});
export const loginSchema = z.object({
  body: z.union([loginBodyByIdentifier, loginBodyByEmail, loginBodyByUsername]),
});


router.post('/signup', validate(signupSchema), signup);
router.post('/login',  validate(loginSchema),  login);

export default router;
