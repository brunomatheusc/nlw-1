import knex from 'knex';

const connection = knex({
    client: 'pg',
    connection: {
        database: "next-level-week-1",
        user: "postgres",
        password: "root"
    },
    useNullAsDefault: true,
});

export default connection;