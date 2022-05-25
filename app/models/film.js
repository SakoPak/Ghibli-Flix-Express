const mongoose = require('mongoose')

const filmSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    original_Title: {
      type: String,
      required: true
    },
    original_title_romanised: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    movie_banner: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    director: {
      type: String,
      required: true
    },
    producer: {
      type: String,
      required: true
    },
    release_date: {
      type: String,
      required: true
    },
    running_time: {
      type: String,
      required: true
    },
    rt_score: {
      type: String,
      required: true
    },
    people: {
      type: String,
      required: true
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

module.exports = mongoose.model('Film', filmSchema)
