describe('connect to database', () => {
    test('should confirm database can connect', () => {
        const conn = new Connnection();
        expect(conn).ToBeDefined();
    })
})