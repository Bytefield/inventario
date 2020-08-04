const express = require('express')
const mysql = require('mysql')

const PORT = process.env.PORT || 3000

const app = express()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '*9CFBBC772F3F6C106020035386DA5BBBF1249A11',
    database: 'inventario-sql'
})

connection.connect(function(err) {
    (err) ? console.log(err) : console.log(connection)
})

require('./routes/html-routes')(app)

app.listen(PORT, () => {
    console.log(`App running in port ${PORT}`)
})