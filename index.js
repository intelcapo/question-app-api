const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000
const routerApi = require('./routes')

app.use(express.json())
app.use(cors())

app.listen(PORT, ()=>{
  console.log(`listen in ${PORT}`)
})


routerApi(app)
