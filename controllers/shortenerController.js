let urlModel = require('../models/url')
const shortId = require('shortid')

exports.store = (req, res) => {
    console.log(req)
    let url = {
        original: req,
        short: shortId.generate(req),
        clicks: 1,
    };
    console.log(url.short)
    urlModel.create(url)
        .then((id) => {
            console.log('OK')
        }).catch((error) => console.log(error));
}
    
exports.findOne = (req, res) => {
    let short = req.short
    urlModel.findByShortUrl(short)
    .then((id) => {
    }).catch((error) => console.log(error));
}

exports.find = (req, res) => {
    return urlModel.findAll()
    
}

exports.save = (req, res) => {
    urlModel.update()
    .then((id) => {
    }).catch((error) => console.log(error));
}

