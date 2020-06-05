import path from 'path';

module.exports = {
    client: 'pg',
    connection: {
        database: "next-level-week-1",
        user: "postgres",
        password: "root"
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
    useNullAsDefault: true,
}