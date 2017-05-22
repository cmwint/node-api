'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// a model of how our collection should look like
var TaskSchema = new Schema({
  // a name, required and it needs to be a string type
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  // the date it was created
  Created_date: {
    type: Date,
    default: Date.now
  },
  // task status, options
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);