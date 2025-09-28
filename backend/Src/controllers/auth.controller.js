// src/controllers/auth.controller.js
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import env from "../config/env.js";

const SALT_ROUNDS = 12;
const signToken = (userId) => jwt.sign({ sub: userId }, env.JWT_SECRET, { expiresIn: '7d' });
const norm = (s) => (typeof s === 'string' ? s.trim() : '');
const toArray = (v) => (Array.isArray(v) ? v : v ? [v] : []);

export const signup = async (req, res) => {
  try {
    const b = req.validated?.body ?? req.body;   // 👈 use validated body

    const payload = {
      email: norm(b.email).toLowerCase(),
      username: norm(b.username),
      password: norm(b.password),
      firstName: norm(b.firstName),
      lastName: norm(b.lastName),
      affiliationTags: toArray(b.affiliationTags),
      countriesExpertise: toArray(b.countriesExpertise),
      countryResidence: norm(b.countryResidence),
      organization: norm(b.organization),
      jobFunction: norm(b.jobFunction ?? b.function),
    };

    if (!payload.email || !payload.username || !payload.password) {
      return res.status(400).json({ error: 'Email, username and password are required' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
    if (payload.username.length < 3) {
      return res.status(400).json({ error: 'Username must be at least 3 characters' });
    }
    if (payload.password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters' });
    }

    const [emailExists, usernameExists] = await Promise.all([
      User.findOne({ email: payload.email }).lean(),
      User.findOne({ username: payload.username }).lean(),
    ]);
    if (emailExists)   return res.status(400).json({ error: 'Email already registered' });
    if (usernameExists)return res.status(400).json({ error: 'Username already taken' });

    const hashedPassword = await bcrypt.hash(payload.password, SALT_ROUNDS);

    const user = await User.create({
      email: payload.email,
      username: payload.username,
      firstName: payload.firstName,
      lastName: payload.lastName,
      affiliationTags: payload.affiliationTags,
      countriesExpertise: payload.countriesExpertise,
      countryResidence: payload.countryResidence,
      organization: payload.organization,
      function: payload.jobFunction,  // 👈 your Mongoose field is named `function`
      password: hashedPassword,
    });

    const token = signToken(user.id);
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      message: 'User registered successfully',
      user: { id: user.id, email: user.email, username: user.username, role: user.role },
      token,
    });
  } catch (err) {
    console.error('❌ Register error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
};

export const login = async (req, res) => {
  try {
    const b = req.validated?.body ?? req.body;

    const identifierRaw = norm(b.identifier ?? b.email ?? b.username);
    const password = norm(b.password);
    if (!identifierRaw || !password) {
      return res.status(400).json({ error: 'Identifier and password are required' });
    }

    const isEmail = identifierRaw.includes('@');
    const identifier = isEmail ? identifierRaw.toLowerCase() : identifierRaw;

    const user = await User.findOne(isEmail ? { email: identifier } : { username: identifier });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

    const token = signToken(user.id);
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      message: 'Login successful',
      user: { id: user.id, email: user.email, username: user.username, role: user.role },
      token,
    });
  } catch (err) {
    console.error('❌ Login error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
};
