const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const sass = require('node-sass')
const app = express()
const port = 3000

const querystring = require('querystring');

app.use(express.static(path.join(__dirname, 'public')))

//HTTP LOGGER
app.use(morgan('combined'))
//template engine 
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'resources/views'))


//get
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/search', (req, res) => {
    if (!req.query.q) {
        req.query.q = 'tcp';
    }

    res.render('search')
})
app.get('/question', (req, res) => {
    res.render('question')
})
app.get('/about', (req, res) => {
    res.render('about')
})



app.get('/exam', (req, res) => {
    res.render('exam')
})
app.get('/test', (req, res) => {
    res.render('test')
})

app.get('/feedback', (req, res) => {
    res.render('feedback')
})
app.get('/profile', (req, res) => {
    res.render('profile')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})

// Khởi động máy chủ
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})