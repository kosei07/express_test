const mongoose = require('mongoose');

const MemoSchema = mongoose.Schema({
  data: Array
});

module.exports = mongoose.model('Memo',MemoSchema);