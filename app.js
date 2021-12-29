const express = require('express');
const path = require("path");

const adminRoutes = require("./routes/admin")

const userRoutes = require('./routes/shop')

const bodyParser = require('body-parser');

const productsController = require("./controllers/products")

const errorController = require("./controllers/error")

const app = express();

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoutes)

app.use(userRoutes)

app.use(express.static(path.join(__dirname, "public")))

app.use(errorController.get404)

app.listen(3000)
