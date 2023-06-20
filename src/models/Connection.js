class Connection {
    constructor() {}

    connect() {
        console.log("Connected!");
    }

    kill() {
        console.log("Connection killed.");
    }
}

module.exports = {Connection}