const {Connection} = require('../src/models/Connection');
const {Query} = require('../src/services/Query');

describe('given a database object', () => {
    test('it should return a valid object', () => {
        const conn = new Connection();
        expect(conn).toBeDefined();
    })

    test('querying the database should return valid data', async () => {
        const conn = new Connection();
        const query = new Query();
        conn.connect();

        const command = "SELECT * FROM contacts";
        const result = await query.selectQuery(command);

        conn.kill();

        expect(result).toEqual(expect.any(Array));
    })
})

// GIVEN a database, and we can successfully connect to it, WHEN I do an insert on the contacts table to add a user, THEN it should successfully add it to the table.
// GIVEN a database, and we can successfully connect to it, WHEN I specify the user, the field, and the new value, THEN it should successfully change that field's value for that user in the table.
// GIVEN a database, and we can successfully connect to it, WHEN I specify the user to delete, THEN it should successfully delete that user from the table.