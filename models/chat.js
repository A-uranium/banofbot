/**
 * @module models/chat
 * @license MIT
 */

/** Dependencies */
const mongoose = require('mongoose');

/** Schema */
const Schema = mongoose.Schema;
const chatSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  username: String,
  first_name: String,
  last_name: String,
  all_members_are_administrators: Boolean,
  language: {
    type: String,
    required: true,
    default: 'en',
  },
  admin_locked: {
    type: Boolean,
    required: true,
    default: false,
  },
  required_voters_count: {
    type: Number,
    required: true,
    default: 5,
  },
  filter_newcomers: {
    type: Boolean,
    required: true,
    default: false,
  },
}, { timestamps: true });

/** Exports */
module.exports = mongoose.model('chat', chatSchema);
