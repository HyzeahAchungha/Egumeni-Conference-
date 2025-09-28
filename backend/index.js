import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import  env  from './Src/config/env.js';
import { connectDB } from './Src/config/db.js';
import authRoutes from './Src/routes/auth.routes.js';

const app = express();


// security & parsing
app.use(helmet());
app.use(cors({ 
 origin: "http://localhost:5173", 
  credentials: true,   
 }));
app.use(express.json({ limit: '1mb' }));

// rate limiting for auth
const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use('/api/auth', authLimiter);

// routes
app.use('/api/auth', authRoutes);

// healthcheck
app.get('/health', (_req, res) => res.json({ ok: true }));

// start
connectDB()
  .then(() => {
    app.listen(Number(env.PORT), () => {
      console.log(`🚀 API ready on http://localhost:${env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('DB connection failed', err);
    process.exit(1);
  });
