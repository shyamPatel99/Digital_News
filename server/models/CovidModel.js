const mongoose = require("mongoose");

const NewsModelSchema = mongoose.Schema({
  // news_title: {
  //   type: String,
  //   required: true,
  // },
  // news_desc: {
  //   type: String,
  //   required: true,
  // },
  // news_date: {
  //   type: Date,
  //   default: Date.now(),
  // },
  // news_image: {
  //   type: String,
  // },

  // news_article_url: {
  //   type: String,
  //   required: true,
  // },
}, { strict: false });

module.exports = mongoose.model("Covid", NewsModelSchema);
