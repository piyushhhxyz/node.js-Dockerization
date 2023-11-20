const express = require("express")
const app = express()

app.get('/', (req,res) => res.end('Hey i am Node.js in Docker Container.'))

const PORT =  process.env.PORT || 8000;
app.listen(PORT, ()=>console.log(`Server Started at ${PORT}`))