import mongoose from "mongoose";

const cacheSchema = new mongoose.Schema({
    cacheKey: {
        type: String,
        required: true,
        unique: true
    },
      data: { type: Object, required: true },

    createdAt: { type: Date, default: Date.now, expires: 900 }
});

const Cache = mongoose.model('Cache', cacheSchema);

export default Cache