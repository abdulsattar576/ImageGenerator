import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,  
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Image', imageSchema);