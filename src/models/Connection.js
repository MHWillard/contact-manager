const Client = require('pg').Client

class Connection {
    constructor() {
        this.client;
    }

    setClient() {
        this.client = new Client({
            user: 'harvey',
            host: 'localhost',
            database: 'contactdb',
            password: 'dat45586',
            port: 5432
        })
    }

    async connect() {
        await this.client.connect();
    }

    async kill() {
        await this.client.end();
    }
}

module.exports = {Connection}