const express = require('express');
const app = express();

// const app = require('express')();

// app.get('/',(req,res) => {
//     res.send('ok');
// }).listen(3000,()=>{
//     console.log('running...')
// });

//------------------------------
let server = app.get('/',(req,res) => {
    res.send('abc');
});
server.listen(3000,() => {
    console.log('running..')
})