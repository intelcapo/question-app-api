const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000
const routerApi = require('./routes')
//This is so importan because allow to us receive information in JSON format
app.use(express.json())
app.use(cors())

app.listen(PORT, ()=>{
  console.log(`listen in ${PORT}`)
})


routerApi(app)
