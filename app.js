const express=require('express')
const app=express()

app.use(express.static('./public'))
app.listen(3000,()=>{
  console.log('sercer running on port 3000')
})