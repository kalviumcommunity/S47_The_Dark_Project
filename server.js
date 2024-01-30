const express = require('express');
const app = express();


//routes

app.get('/', (req, res) => {
    res.send("Hello NODE API");
})


app.listen(5100, ()=> {
    console.log("Node API app is running on port 3000");
})
