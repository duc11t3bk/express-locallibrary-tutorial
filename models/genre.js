var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    book: [{type: Schema.Types.ObjectId, ref: 'Genre'}],
    name: {type: String, required: true, min: 3, max: 100}
  }
);

//Virtual for genre's URL
GenreSchema
  .virtual('url')
  .get(function () {
    return '/genre/' + this.name;
  });

  module.exports = mongoose.model('Genre', GenreSchema);