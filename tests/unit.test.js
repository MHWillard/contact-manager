const {Connection} = require('../src/models/Connection');
const {Query} = require('../src/services/Query');
const {Contact} = require('../src/services/Contact');
const request = require('supertest');

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
        const result = await query.selectQuery(command);

        conn.kill();

        expect(result).toEqual(expect.any(Array));
    })

    test('should be able to insert a new user into a table', async () => {
        const conn = new Connection();
        const query = new Query();
        conn.setClient();
        conn.connect();

        //fields: id, name, email, phone number, job, status, interests, notes, (updates becomes its own table) and they are joined
        //updates: id, entry date, notes

        const newContact = new Contact("testname", "test@testemail.com", "555-1234","Test Dummy","Friend","Video game testing, security testing, shuffleboard","No notes so far");
        await query.insertQuery(newContact);

        const command = "SELECT * FROM contacts where name = 'testname'";
        const result = await query.selectQuery(command);

        conn.kill();

        expect(result).toEqual(expect.any(Array));
    })
})

describe('given a database and API routes', () => {
    //given a database and a GET route, WHEN we access that rut
    test('WHEN we poll the /get route, THEN it should return a list of all the users', () => {
        const conn = new Connection();
        expect(conn).toBeDefined();
    })
})

//TODO: set up PostgreSQL in node
//TODO: create/test users get route: use Supertest
//TODO: set up basic frontend: React, NextJS
//TODO: connect frontend to backend and test users GET
//TODO: have frontend render list of users in DB
//TODO: create ability to add users to DB from frontend button
//TODO: move to deployment on hosted instance

// GIVEN a database, and we can successfully connect to it, WHEN I do an insert on the contacts table to add a user, THEN it should successfully add it to the table.
// GIVEN a database, and we can successfully connect to it, WHEN I specify the user, the field, and the new value, THEN it should successfully change that field's value for that user in the table.
// GIVEN a database, and we can successfully connect to it, WHEN I specify the user to delete, THEN it should successfully delete that user from the table.