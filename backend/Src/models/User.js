import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
   {
    email: { type: String, required: true, unique: true, lowercase: true, index: true },
    username: { type: String, required: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    affiliationTags: { type: [String], default: [] }, 
    countriesExpertise: { type: [String], default: [] },
    countryResidence: { type: String },
    organization: { type: String },
    function: { type: String }, // job title
    password: { type: String, required: true }, // store hashed password
    role: { type: String, enum: ['user', 'admin'], default: 'user' }, 
  },
  { timestamps: true}
);

const User = mongoose.model('User', UserSchema);
export default User;

