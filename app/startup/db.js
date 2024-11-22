const mongoose = require('mongoose');

module.exports = function () {
    const db = String(process.env.DATABASE_URL);
    console.log(db)
    mongoose.connect(db)
        .then(() => console.log(`connected to ${db}`));
}