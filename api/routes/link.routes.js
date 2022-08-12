const Router = require('express');
const ShortUrl = require('../models/ShortUrl');
const router = new Router();

router.post('/shortUrl', async (req, res) => {
    try {
        console.log(req.body);
        const { longUrl } = req.body;
        const url = new ShortUrl({ longUrl });
        
        await url.save();
        return res.json({message: 'url was created'});
    } catch (e) {
        console.log(e);
        res.send(e);
    }
});

module.exports = router;
