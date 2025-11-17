const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: {
    // lowercase field name is standard practice
    type: String, // ✅ Mongoose String
    required: true,
  },
  rating: {
    type: Number, // ✅ Mongoose Number
    min: 1,
    max: 5,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // ✅ pass function, not Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Review", reviewSchema);
