var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

function toLower (input) {
  return input.toLowerCase();
}

vacancySchema = new Schema({
  companyname:  { type: String, unique: true },
  companyemail: { type: String, required: true, set: toLower },
  title:        { type: String, required: true },
  skills:       { type: String, required: true },
  compensation: { type: Number},
  description:  { type: String, required: true },
  posted:       { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vacancy', vacancySchema);
