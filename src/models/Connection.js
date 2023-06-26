const Client = require('pg').Client
require('dotenv').config()

class Connection {
    constructor() {
        this.client;
    }

    setClient() {
        this.client = new Client({
            user: process.env.USER,
            host: process.env.HOST,
            database: process.env.DATABASE,
            password: process.env.PASSWORD,
            port: process.env.PORT
        })
    }

    getClient() {
        return this.client;
    }

    connect() {
        this.client.connect();
    }

    kill() {
        this.client.end();
    }
}

module.exports = {Connection}