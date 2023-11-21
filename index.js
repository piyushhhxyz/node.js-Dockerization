const express = require("express")
const axios = require("axios")
const app = express()

app.use(express.json());

app.get('/', async (req,res) => {
    console.log('hello from node running in a docker container')
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
    
    const jsonResponse = {
        message: 'Hello, I am node, running in a docker container.',
        data
    };
    const formattedJson = JSON.stringify(jsonResponse, null, 2); 
    res.set('Content-Type', 'application/json');
    res.send(formattedJson);
    
})

const PORT =  process.env.PORT || 8000;
app.listen(PORT, ()=>console.log(`Server Started at ${PORT}`))