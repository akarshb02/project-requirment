const express = require('express')
const app = express()
const fetch = require('node-fetch');
const newsRouter = express.Router()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))

newsRouter.get('', async(req, res) => {



    const newsAPI = await fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-03-02&sortBy=popularity&apiKey')
        .then(res => res.json())
    res.render('news.ejs', { article: newsAPI.articles });
    //.then(daata => console.log(daata.articles))


})
newsRouter.get('/:url', async(req, res) => {
    let articleName = req.params.url;


    const newsAPI = await fetch(`https://newsapi.org/v2/everything?q=Apple&from=2021-03-02&sortBy=popularity&apiKey/${articleName}`)
        .then(res => res.json())
    res.render('content.ejs', { art: newsAPI.articles });



})

module.exports = newsRouter
