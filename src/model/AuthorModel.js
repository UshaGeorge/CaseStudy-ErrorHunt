const mongoose = require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Library');
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true});
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;