/* jshint esversion: 6 */

const express = require('express');
const app = express();
const bp = require('body-parser');

const PORT = process.env.PORT || 9000;
const db = require('./models');
const { Users, Topics, Messages } = db;

app.use(express.static('public'));
app.use(bp.urlencoded());

app.get('/api/test', (req,res)=>{
  res.json({
    name: 'hithere',
    age: 345
  })
})

app.get('*', (req,res) =>{
  res.sendFile('index.html', {root: path.join(__dirname, '/public') });
});


const server = app.listen(PORT, ()=>{
  //db.sequelize.sync();
  console.log(`message board server running on ${PORT}`);
});