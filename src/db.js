const {pool} = require('pg')
const { use } = require('./routes/tasks.routes')

new pool({
    user: 'postgres',
    password: '141204',
    host: 'localhost',
    port: 5432,
    database: ''
})