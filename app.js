const express = require('express')
const app  = express()
app.get('/',(req,res)=>{
  res.send('Hello world, I am achyut')
})
app.listen(3000)
