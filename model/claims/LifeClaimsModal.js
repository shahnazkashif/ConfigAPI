const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema(
  {
    profileId: { type: mongoose.Schema.Types.ObjectId, ref: "Profile", required: true },
    title: { type: String, required: true },
    forename: { type: String, required: true },
    surname: { type: String, required: true },
    maidenName: { type: String },
    dateOfBirth: { type: Date, required: true },
    dateMarriage: { type: Date },
    deceased: { type: Boolean, required: true },
    dateOfDeath: {
      type: Date,
      required: function () {
        return this.deceased;  // Mandatory if deceased is true
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("partner", partnerSchema);
