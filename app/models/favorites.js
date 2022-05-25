const mongoose = require('mongoose')
const Schema = mongoose.Schema

const favoriteSchema = new mongoose.Schema(
  {
    userFrom: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    id: {
      type: String
    },
    title: {
      type: String
    },
    director: {
      type: String
    },
    description: {
      type: String
    },
    image: {
      type: String
    },
    movie_banner: {
      type: String
    },
    release_date: {
      type: String
    },
    running_time: {
      type: String
    }
  },
  {
    timestamps: true,
    toObject: {
      // remove `hashedPassword` field when we call `.toObject`
      transform: (_doc, user) => {
        delete user.hashedPassword
        return user
      }
    }
  }
)

module.exports = mongoose.model('Favorite', favoriteSchema)
