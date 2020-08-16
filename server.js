require('dotenv').config()
const express = require('express')
const MongoClient = require('mongodb').MongoClient

const dbUser = process.env.DBUSER
const dbPassword = process.env.DBPASSWORD
const dbName = process.env.DBNAME

const uri = "mongodb://" + dbUser + ":" + dbPassword + "@ds211289.mlab.com:11289/" + dbName
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const collection = client.db("test").collection("devices");
    if (err) {
        console.error(err)
        client.close(() => {
            console.log('closing mongo')
            return 0
        })
    } else {
        console.log('Connection to Mongo stablished!')
    }
  
});


const PORT = process.env.PORT || 3000

const app = express()

require('./routes/html-routes')(app)

app.listen(PORT, () => {
    console.log(`App running in port ${PORT}`)
})