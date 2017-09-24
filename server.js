/* jshint esversion: 6 */

const express = require('express');
const app = express();
const bp = require('body-parser');

const PORT = process.env.PORT || 9000;
const db = require('./models');
const { User, Topic, Message } = db;

app.use(express.static('public'));
app.use(bp.urlencoded());

app.get('/api/topics', (req,res)=>{
  Topic.findAll({
    attributes: ['id','name']
  })
  .then((data)=>{
    res.send(data);
  });
});

app.get('/api/users', (req,res)=>{
  User.findAll({
    attributes: ['name']
  })
  .then((data)=>{
    res.send(data);
  });
});

app.get('/api/messages/by-topic/:id', (req,res)=>{
  console.log(req.params.id)
  Message.findAll({
    where:{
      topic_id: req.params.id
    }
  })
  .then((data) =>{
    res.send(data);
  });
});

app.get('/api/messages/latest', (req,res)=>{
  Message.findAll({
    limit: 10
  })
  .then((data)=>{
    res.send(data);
  });
});

// app.get('*', (req,res) =>{
//   res.sendFile('index.html', {root: path.join(__dirname, '/public') });
// });


const server = app.listen(PORT, ()=>{
  db.sequelize.sync();
  console.log(`message board server running on ${PORT}`);
});