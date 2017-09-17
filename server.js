/* jshint esversion: 6 */

const express = require('express');
const app = express();
const bp = require('body-parser');

const PORT = process.env.PORT || 9000;
const db = require('./models');
const { Users, Topics, Messages } = db;

app.use(express.static('public'));
app.use(bp.urlencoded());

app.get('/api/topics', (req,res)=>{
  Topics.findAll({
    attributes: ['name']
  })
  .then((data)=>{
    res.send(data);
  })
})

app.get('*', (req,res) =>{
  res.sendFile('index.html', {root: path.join(__dirname, '/public') });
});


const server = app.listen(PORT, ()=>{
  //db.sequelize.sync();
  console.log(`message board server running on ${PORT}`);
});