import mongoose from 'mongoose';

const {Schema} = mongoose;

export const RecipientSchema = new Schema({
  email: String,
  responded: {type: Boolean, default: false},
});

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: {type: Number, default: 0},
  no: {type: Number, default: 0},
  dateSent: Date,
  lastResponded: Date,
  _user: {type: Schema.Types.ObjectId, ref: 'users'},
});

mongoose.model('surveys', surveySchema);
