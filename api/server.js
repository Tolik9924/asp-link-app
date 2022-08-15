const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();
const PORT = config.get('serverPort');

const linkRouter = require('./routes/link.routes');
const redirectRouter = require('./routes/redirect.routes');
const getLongLink = require('./routes/getLongLink.routes');

const corsMiddleware = require('./middleware/cors.middleware');

app.use(corsMiddleware);
app.use(express.json())
app.use('/api/link', linkRouter);
app.use('/api/getlink', redirectRouter);
app.use('/api/getlonglink', getLongLink);

const start = async () => {
    try {
        await mongoose.connect(config.get('dbUrl'));

        app.listen(PORT, () => {
            console.log('Server started on port', PORT);
        })

    } catch (e) {
        console.log(e.message);
    }
}

start();
