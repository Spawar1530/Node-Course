const express = require('express');
const path = require("path");

const adminRoutes = require("./routes/admin")

const userRoutes = require('./routes/shop')

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoutes)

app.use(userRoutes)

app.use(express.static(path.join(__dirname, "public")))

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "page-not-found.html"))
})

app.listen(3000)
