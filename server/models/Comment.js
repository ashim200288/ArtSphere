const { Schema, model, models } = require('mongoose');
module.exports = models.Comment || model(
  'Comment',
  new Schema(
    {
      artworkId: { type: Schema.Types.ObjectId, ref: 'Artwork', required: true },
      userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
      comment: { type: String, required: true, trim: true, maxlength: 1000 },
    },
    { timestamps: true }
  )
);
