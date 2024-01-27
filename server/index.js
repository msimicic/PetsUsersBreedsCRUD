const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

const breedRoute = require("./routes/Breed");
app.use("/breeds", breedRoute);

const userRoute = require("./routes/User");
app.use("/users", userRoute);

const petRoute = require("./routes/Pet");
app.use("/pets", petRoute);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("listening to port 3001");
  });
});
