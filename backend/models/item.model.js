const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type : String,
        required: true,
      },
      brand: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      size: [{
        name: {type: String, required: true},
        quantity: {type: Number, required: true}
      }],
      image: {
        type: Array,
      },
      likers: {
        type: [String],
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model('item', itemSchema)