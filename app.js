const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const adminRoute = require('./routes/adminRoute');
const pageRoute = require('./routes/pageRoute');
const portfolioRoute = require('./routes/portfolioRoute');
const teamRoute = require('./routes/teamRoute');

const app = express();

// Connect Database
mongoose.connect('mongodb://localhost:27017/agency-db').then(() => {
    console.log('Db connected!');
});

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(
    methodOverride('_method', {
        methods: ['POST', 'GET'],
    })
);

// ROUTE
app.use('/', pageRoute);
app.use('/admin', adminRoute);
app.use('/portfolio', portfolioRoute);
app.use('/team', teamRoute);

const port = 3000;

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışıyor...`);
})