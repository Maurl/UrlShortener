const express = require('express')
const app = express()
const Controller = require('./controllers/shortenerController')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  const Urls = await Controller.find()
  res.render('index', { Urls: Urls })
})

app.get('/%= Url.short %+', async (req, res) => {
  const Url = await Controller.findOne({ short: req.params.Url })
  if (Url == null) return res.sendStatus(404)
  Url.clicks++
  Url.save()
  res.redirect(Url.full)
})

app.listen(process.env.PORT || 4200);