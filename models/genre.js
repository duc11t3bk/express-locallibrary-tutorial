var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {type: String, required: true, min: 3, max: 100},
    book: [{type: Schema.Types.ObjectId, ref: 'Book'}]
  }
);

//Virtual for genre's URL
GenreSchema
  .virtual('url')
  .get(function () {
    return '/catalog/genre/' + this._id;
  });

module.exports = mongoose.model('Genre', GenreSchema);