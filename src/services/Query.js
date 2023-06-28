class Query {
    constructor() {}

    async selectQuery(client, command) {
        const queryResult = await client.query(command);
        return queryResult;
    }

    async insertQuery(client, contact) {
        const fullContact = contact.ContactArray;
        try {
            await client.query('INSERT INTO contacts (name, email, phone, job, status, interests, notes) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', fullContact)
            await client.query('COMMIT')
        } catch (e) {
            await client.query('ROLLBACK')
            throw e
        }
    }
}

module.exports = {Query}