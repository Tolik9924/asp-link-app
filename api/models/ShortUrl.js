const {Schema, model} = require('mongoose');

const ShortUrl = new Schema({
    urlCode: {
        type: String
    },
    longUrl: {
        type: String
    },
    shortUrl: {
        type: String
    },
    date: {
        type: String,
        default: Date.now
    }
});

module.exports = model('ShortUrl', ShortUrl);
