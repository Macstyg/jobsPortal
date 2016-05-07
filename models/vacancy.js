var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

function toLower (input) {
  return input.toLowerCase();
}

vacancySchema = new Schema({
  companyname:  { type: String },
  companyemail: { type: String, required: true, set: toLower },
  posted:       { type: Date, default: Date.now },
  skills:       { type: String, required: true },
  compensation: { type: Number},
  title:        { type: String, required: true },
  description:  { type: String, required: true }
});

module.exports = mongoose.model('Vacancy', vacancySchema);
