const mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  amount: { type: Number, required: true },
  acquired: { type: Boolean, required: true, default: false },
  items: [
    {
      item_name: { type: String, required: true },
      item_unit: { type: Number, required: true },
      item_price: { type: Number, required: true },
    },
  ],
  owner: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
});

//userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Order", orderSchema);
