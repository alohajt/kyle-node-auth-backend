const express = require('express')
const bodyParser = require("body-parser")

const app = express()
// app.use(cors())
app.use(bodyParser.json())

const createUser = (request, response) => {
    response.json({
        user: "You added a user"
    })
}

app.post('/users', createUser)


app.listen(process.env.PORT || 4000, () => console.log('ok working'))