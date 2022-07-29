const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {

        let uri =    "mongodb://localhost:27017/medium" || process.env.MONGODB_URL;
        console.log(uri);
        await mongoose.connect(uri, { useNewUrlParser: true });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {connectDB};
