const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const newsRouter = require('./src/routes/news');

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))


app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))



app.get('/', newsRouter)
app.get('/article', newsRouter)

app.listen(501, function() {
    console.log("server started");
})
