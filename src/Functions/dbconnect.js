const mysql = require('mysql');
require('dotenv').config;
const { DB_USERNAME, DB_DATABASE, DB_PASSWORD, DB_HOST } = process.env;

module.exports = async () => {

    let db = await mysql.createConnection({
        host: DB_HOST,
        user: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE
    })
    return db;
}
