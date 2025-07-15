const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    }
    catch (error) {
        console.error("db connection failed....", error.message);
    }
}
module.exports = connectdb;