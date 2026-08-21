// server.js - Express server setup for user registration
const express = require('express')
const app = express()
app.use(express.json())

// database connection
const mysql = require('mysql2')
require('dotenv').config()

// encryption
const bcrypt = require('bcrypt')

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

// routes
app.post('/api/sign-up', async (req, res) => {
    const { username, email, birthday, phoneNumber, password } = req.body
    // encrypt password
    const saltRounds = 10
    const hashedPassword = bcrypt.hashSync(password, saltRounds)

    // store user in database
    const query = 'INSERT INTO users (username, email, dob, phoneNumber, password) VALUES (?, ?, ?, ?, ?)'
    const values = [username, email, birthday, phoneNumber, hashedPassword]
    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Internal server error' })
        } else {
            console.log('User created successfully')
            res.status(201).json({ message: 'User created successfully' })
        }
    })
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
