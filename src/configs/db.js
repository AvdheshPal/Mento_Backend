const mongoose = require('mongoose');
require('dotenv').config()

const connect = () => {
    console.log('Database Connected');
    return mongoose.connect(
       process.env.DATABASE_URL + "mento-server"
    )
}

module.exports = connect;