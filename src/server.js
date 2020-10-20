const express = require('express');
const path = require('path');
const pages = require('./pages.js');



const server = express()

server
    //use the body req
    .use(express.urlencoded({ extended: true}))
    //using static files
    .use(express.static('public'))
    // configurate template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    // create a routes
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

// turn on the server
server.listen(5500)