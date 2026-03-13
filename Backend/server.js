const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const productRoutes = require('./routs/productRouts');

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/api', productRoutes);
app.listen(5000, "0.0.0.0", () => {
  console.log('Server is running on port 5000');
});