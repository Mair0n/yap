const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/reserve', (err) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log('Successfully connected to DB.')
    }
})

module.exports = mongoose;