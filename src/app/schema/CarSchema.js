const mongoose = require("mongoose");
const mongoosepaginate = require("mongoose-paginate-v2");

const CarSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },

    year: {
      type: String,
      required: true,
    },

    accessories: [
      {
        description: {
          type: String,
          required: true,
        },
      },
    ],
    passengersQtd: {
      type: Number,
      required: true,
      min: [1, "must have at least one passenger"],
    },
  },
  { versionKey: false }
);

CarSchema.plugin(mongoosepaginate);

const car = mongoose.model("Car", CarSchema);
module.exports = car;
// deploy
