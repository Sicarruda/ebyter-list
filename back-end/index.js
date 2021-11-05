const express = require('express');
const taskRoute = require('./modules/route');
const cors = require('cors');

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());

app.use('/', taskRoute);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
