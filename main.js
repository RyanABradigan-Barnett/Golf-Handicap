const { Client } = require('pg');

const dbConfig = {
    user: 'root',
    password: 'Tiger369',
    host: 'localhost',
    port: 5432,
    database: 'golf_calculator',
};

const client = new Client(dbConfig);

async function connect() {
    try {
        await client.connect();
        console.log('Connected')
    } catch (err) {
        console.error('Error connecting')
    } finally {
        await client.end();
        console.log('Closed')
    }
}

connect()