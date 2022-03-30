require('dotenv').config();
const mongoose = require('mongoose');

const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const cluster = process.env.DB_CLUSTER;
const dbName = process.env.DB_NAME;

const DBConnect = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${userName}:${password}@${cluster}.k2jah.mongodb.net/${dbName}?retryWrites=true&w=majority`
        );
        console.log('Mongoose connect to databse successfully 😝');
    } catch (error) {
        console.log('Connect to database error 🤮', error);
    }
};

module.exports = { DBConnect };
