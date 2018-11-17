
// console.log(path.join(__dirname,'/../public'));
const path = require('path');
const express =require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'/../public')));


app.get('/',(req,res)=>{
res.send('<h1>WELCOME BROTHER...</h1>')
})



app.listen(port,()=>{
    console.log('server started on port 3000')
})