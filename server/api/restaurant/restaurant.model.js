'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
  name: String,
  address: String,
  country: String,
  city:String,
  language: String,
  Tags:[String],
  urlgoogleMap:String,
  userid: { type: Schema.ObjectId, ref: 'UserSchema' },
  created_at    : { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('restaurant', RestaurantSchema);