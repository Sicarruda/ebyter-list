const express = require('express');
const taskRoute = require('./modules/route')
const app = express();
const port = 3001;

app.use('/home', taskRoute)

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
