const {Schema, model} = require('mongoose');
const shortId = require('shortid');

const ShortUrl = new Schema({
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        default: shortId.generate
    }
});

module.exports = model('ShortUrl', ShortUrl);
