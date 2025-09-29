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
const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map(s => s.trim());

app.use(cors({
  origin: function (origin, callback) {
    // allow Postman/curl (no origin)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// respond to preflight
app.options(/.*/, cors({ origin: allowedOrigins, credentials: true }));
// ---------------------------------


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
