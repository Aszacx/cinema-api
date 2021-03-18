require('dotenv').config()

module.exports = {
    api: {
        port: process.env.API_PORT || 3000,

    },
    jwt: {
        secret: process.env.JWT_SECRET || 'secret',
    },
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    }
}