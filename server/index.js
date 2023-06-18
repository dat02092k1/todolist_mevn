const express = require('express');
const routes = require('./route/routes.js');
const cors = require('cors');
const sequelize = require('./db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());



app.use('/api/task', routes);
app.use(cors())
const port = process.env.PORT || 8000;

app.listen(port, (err) => {
  if (err) console.log("error");
  else console.log(`server listening on ${port}`);
});
