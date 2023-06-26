class Query {
    constructor() {}

    async selectQuery(client, command) {
        const queryResult = await client.query(command);
        return queryResult;
    }

    async insertQuery(client, contact) {
        const queryResult = ['1','2','3','4','5','6','7']
        //const contactArray = contact.getContactArray();
        //const queryResult = await client.query('INSERT INTO users (name, email, number, job, status, interests, notes) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', contactArray)
        return queryResult
    }
}

module.exports = {Query}