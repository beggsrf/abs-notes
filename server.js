const express = require('express')

const app = express()

app.listen(3000)

var engines = require('consolidate');

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    console.log('Here')
    res.render('index')
})

console.log('Restarted')

