var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

vacancySchema = new Schema({
  skills: { type: String, required: true },
  compensation: Number,
  title: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Vacancy', vacancySchema);
