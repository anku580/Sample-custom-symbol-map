const express = require('express')
const app = express()
const port = 3002
const bodyParser = require('body-parser');
const cors = require('cors');

const symbol = require('./routes/symbolRouter');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/symbol', symbol);
app.use('/static', express.static('public'))

app.listen(port, () => console.log(`Sample Server is listening at http://localhost:${port}`))

