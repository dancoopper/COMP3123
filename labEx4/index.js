const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello', (req,res)=>{
    res.send("Hello Express JS")
})



app.get('/user', (req, res)=>{
    const first_name = req.query.firstname || "Pritesh"
    const last_name = req.query.lastname || "Patel"
    res.send({firstname: first_name, lastname: last_name})
})


app.post('/user/:firstname/:lastname', (req,res)=>{
   var name =  req.params
    res.send(name)
})

app.post('/users', (req, res)=>{
    res.send(req.body)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
