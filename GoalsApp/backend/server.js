const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/error');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(bodyParser.json());
bodyParser.urlencoded({ extended: false });

app.use('/goals', require('./routes/goal'));
app.use('/users', require('./routes/user'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(
            path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
        )
    )
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}

app.use(errorHandler);

app.listen(port, console.log(`Server started on port: ${port}`));