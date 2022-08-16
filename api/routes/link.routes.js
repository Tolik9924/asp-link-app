const Router = require('express');
const ShortUrl = require('../models/ShortUrl');
const shortId = require('shortid');
const validUrl = require('valid-url');
const router = new Router();

const baseUrl = 'http:localhost:5000/asd.link/getlink';

router.post('/shortUrl', async (req, res) => {

    console.log(req.body);
    const { longUrl } = req.body;

    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base URL');
    }

    const urlCode = shortId.generate();

    if (validUrl.isUri(longUrl)) {
        try {

            let url = await ShortUrl.findOne({
                longUrl
            })

            if(url) {
                res.json(url);
            } else {
                const shortUrl = baseUrl + '/' + urlCode

                url = new ShortUrl({
                    urlCode,
                    longUrl,
                    shortUrl: shortUrl,
                    date: new Date()
                })
                await url.save();
                res.json(url);
            }
        } catch (e) {
            console.log(e);
            res.send(e);
        }
    }
});

module.exports = router;
