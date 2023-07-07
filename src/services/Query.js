//export default 
class Query {
    constructor() {}

    async selectQuery(conn, command) {
        const core = conn.getClient()
        const queryResult = await core.query(command);
        return queryResult;
    }

    async insertQuery(conn, contact) {
        const client = conn.getClient();

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

module.exports = Query;