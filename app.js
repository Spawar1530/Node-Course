const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const errorController = require("./controllers/error");
const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
User.findById("61d696b81c889951d589c9b8").
then(user => {
  req.user = user
  next()
})
  .catch(err => console.log(err))
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://suraj:Test12345@cluster0.f97ut.mongodb.net/Node_Course?retryWrites=true&w=majority"
  )
  .then(() => {
    User.findOne().then(user => {
      if(!user){
        const user = new User({
          name: "Suraj",
          email: "suraj@gmail.com",
          cart:{
            items: [
      
            ]
          }
        })
        user.save()
      }
    })
    app.listen(3000);
    console.log("connected")
  })
  .catch((err) => console.log(err));
