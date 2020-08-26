require('dotenv').config()
const express = require('express')

const app = express()

const mongoose = require('mongoose')
var cors = require('cors')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error)  => console.error(error))
db.once('open', () => console.log('connected to db :)'))

app.use(cors())
app.use(express.json() )


const studentRouter = require('./routes/StudentRoute')


app.use('/students', studentRouter)

app.listen(3000, () => console.log('server started'))

