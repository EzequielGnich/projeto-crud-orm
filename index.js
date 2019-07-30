const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3001
const bodyParser = require('body-parser')

const model = require('./models/index')
const pessoasRouter = require('./routes/pessoasRouter')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/pessoas', pessoasRouter)

model.sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => console.log('CRUD-ORM Listening: port -> ' + port))
})
