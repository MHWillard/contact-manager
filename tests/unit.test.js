/*import Connection from '../src/models/Connection'
import Query from '../src/services/Query.js'
import Contact from '../src/services/Contact.js'
import request from 'supertest'*/

const Connection = require('../src/models/Connection');
const Query = require('../src/services/Query');
const Contact = require('../src/services/Contact');
const request = require('supertest');
const app = require('../app')

describe('given a database object', () => {
    test('it should return a valid object', () => {
        const conn = new Connection();
        expect(conn).toBeDefined();
    })

    test('querying the database should return valid data', async () => {
        const conn = new Connection();
        const query = new Query();
        conn.setClient();
        conn.connect();

        const command = "SELECT * FROM contacts";
        const result = await query.selectQuery(conn, command);

        conn.kill();

        console.log("Result is:" + result.rows)
        expect(result).toEqual(expect.any(Object));
    })

    test('should be able to insert a new user into a table', async () => {
        const conn = new Connection();
        const query = new Query();
        conn.setClient();
        conn.connect();

        const newContact = new Contact("testname", "test@testemail.com", "555-1234","Test Dummy","Friend","Video game testing, security testing, shuffleboard","No notes so far");
        await query.insertQuery(conn, newContact);

        const command = "SELECT * FROM contacts where name = 'testname'";
        const result = await query.selectQuery(conn, command);

        conn.kill();

        expect(result).toEqual(expect.any(Object));
    })
})

describe('given a database and API routes', () => {
    //given a database and a GET route, WHEN we access that rut
    it('should return a 200 status code', async() => {
        const res = await request('http://localhost:5000').get('/');

        expect(res.statusCode).toBe(200);
    });

    it('should return a user when polled', async() => {
        const res = await request('http://localhost:5000').get('/users');

        expect(res.statusCode).toBe(200);
        expect(res.body).toMatchObject({name: 'user'})
    });

    it('should return a list of contacts from the contact database', async() => {
        const res = await request('http://localhost:5000').get('/contacts');

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
    });
})

//X TODO: set up PostgreSQL in node
//X TODO: create/test users get route: use Supertest
//TODO: set up basic frontend: React, NextJS
//// X TODO: design layout of single-page app components: Header, search, contactList, pagination
//// TODO: ~ review how NextJS handles React
//// TODO: ~ learn how to write tests for Reach components
//TODO: connect frontend to backend and test users GET
//TODO: have frontend render list of users in DB
//TODO: create ability to add users to DB from frontend button
//TODO: move to deployment on hosted instance
//TODO: from hosted instance, do e2e tests
//TODO: do basic CSS styling with Tailwind

// GIVEN a database, and we can successfully connect to it, WHEN I do an insert on the contacts table to add a user, THEN it should successfully add it to the table.
// GIVEN a database, and we can successfully connect to it, WHEN I specify the user, the field, and the new value, THEN it should successfully change that field's value for that user in the table.
// GIVEN a database, and we can successfully connect to it, WHEN I specify the user to delete, THEN it should successfully delete that user from the table.

//fields: id, name, email, phone number, job, status, interests, notes, (updates becomes its own table) and they are joined
//updates: id, entry date, notes