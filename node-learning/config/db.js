const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://root:86wRoWiK2LMHwFEx@gruka.lmopckp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=gruka');
        console.log('connected to mongodb');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    }
};

module.exports = connectDB;
