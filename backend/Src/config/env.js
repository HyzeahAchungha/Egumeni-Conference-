import 'dotenv/config';

const env = {
  PORT: process.env.PORT || '5000',
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  CORS_ORIGIN: process.env.CORS_ORIGIN || '*',
};

if (!env.MONGO_URI) throw new Error('MONGO_URI is required');
if (!env.JWT_SECRET) throw new Error('JWT_SECRET is required');

export default env; 