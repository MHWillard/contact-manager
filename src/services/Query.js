class Query {
    constructor() {}

    async selectQuery() {
        const queryResult = ["Ayy", "Bee", "Cee"];
        return queryResult;
    }

    async insertQuery(contact) {
        return true;
    }
}

module.exports = {Query}