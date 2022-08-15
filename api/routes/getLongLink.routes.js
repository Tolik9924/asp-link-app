const Router = require('express');
const router = new Router();
const ShortUrl = require('../models/ShortUrl');

router.get('/:code', async(req, res) => {
    try {
        const url = await ShortUrl.findOne({urlCode: req.params.code});
        if (url) {
            return res.json(url.longUrl);
        } else {
            return res.status(404).json('No URL Found');
        }
    } catch(e) {
        console.log('Error: ',e.message);
    }
});

module.exports = router;
