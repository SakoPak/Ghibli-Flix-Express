const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    first: {
      type: String
    },
    last: {
      type: String
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Profile', profileSchema)
