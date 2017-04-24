module.exports = {
    port: 4000,
    mysql: {
        database: 'shopping',
        username: 'root',
        password: 'root',
        params: {
            host: 'localhost',
            dialect: 'mysql',
            dialectOptions: {
                // socketPath: '/var/lib/mysql/mysql.sock',  // linux
                socketPath: '/tmp/mysql.sock', // mac
            },
            define: {
                underscored: true,
            },
            logging: console.log,
        },
    },
};