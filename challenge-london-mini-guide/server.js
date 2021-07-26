const express= require('express');
const app = express();
const Stratford = require("./data/Stratford.json")
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));




app.get("/", function(request, response) {
  response.json(Stratford);
});





const listener = app.listen(process.env.PORT || 3021, function () {
  console.log("Your app is listening on port " + listener.address().port);
});


