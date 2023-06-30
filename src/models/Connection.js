//import {Client} from 'pg'
//import * as ck from 'ckey'

//import express from 'express'

const Client = require('pg').Client
const ck = require('ckey')

//export default 
class Connection {
    constructor() {
        this.client;
    }

    setClient() {
        const env_user = ck.USER
        const env_host = ck.HOST
        const env_database = ck.DATABASE
        const env_password = ck.PASSWORD
        const env_port = ck.PORT

        this.client = new Client({
            user: env_user,
            host: env_host,
            database: env_database,
            password: env_password,
            port: env_port
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

module.exports = Connection;