const express = require('express');

const ProductData = require('./src/model/Productdata');
const TickettData = require('./src/model/bookTicket')
const cors = require('cors');
const User = require('./src/model/user');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(bodyparser.json())





app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);

    var product = {
       
        productName : req.body.product.productName,
        genre: req.body.product.genre,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        imageUrl : req.body.product.imageUrl,
   }
   var product = new ProductData(product);
   product.save();
   res.send({msg:"Inserted"});
});

app.post('/insertusertickets',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);

    var ticket = {
       bookerName: req.body.ticket.bookerName,
        movieName : req.body.ticket.movieName,
        noOfSeats: req.body.ticket.noOfSeats,
       showTime : req.body.ticket.showTime,
       day:req.body.ticket.day,
       month:req.body.ticket.month,
        
   }
   var ticket = new TickettData(ticket);
   ticket.save();
   res.send({msg:"Ticket Booked"});
});



app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    ProductData.find()
                .then(function(products){
                    res.send(products);
                });
});


app.get('/userbookedtickets',function(req,res){
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  console.log("node1");
  TickettData.find()
              .then(function(userbookedtickets){
                console.log(userbookedtickets)
                  res.send(userbookedtickets);
              });
});

app.get('/users',function(req,res){
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  User.find()
              .then(function(users){
                  res.send(users);
              });
});


app.get('/delete/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    const id=req.params.id;
    ProductData.remove({_id:id}).then((err)=>{
        res.send({"msg":"Deleted Product : "+id});
    })
})


app.get('/deleteusers/:id',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  const id=req.params.id;
  User.remove({_id:id}).then((err)=>{
      res.send({"msg":"Deleted User : "+id});
  })
})

app.get('/deletebookedtickets/:id',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  const id=req.params.id;
  TickettData.remove({_id:id}).then((err)=>{
      res.send({"msg":"Deleted Booking : "+id});
  })
})

app.get('/update/:id' , (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    const id=req.params.id;
    ProductData.findOne({_id:id}).then((data)=>{
       console.log(data);
        res.send(data);
    })
});

app.get('/updateusers/:id' , (req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  const id=req.params.id;
  User.findOne({_id:id}).then((data)=>{
     console.log(data);
      res.send(data);
  })
});
app.post('/update',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);

    var product = {
        
        productName : req.body.product.productName,
        genre : req.body.product.genre,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        imageUrl : req.body.product.imageUrl,
   }
    ProductData.update({_id:req.body.product._id},product).then((err)=>{
        res.send({msg:"Updated"});
    });
});


app.post('/updateusers',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  console.log(req.body);

  var user = {
      
      username : req.body.user.username,
      email : req.body.user.email,
      mobilenumber: req.body.user.mobilenumber,
      password : req.body.user.password,
    
 }
  User.update({_id:req.body.user._id},user).then((err)=>{
      res.send({msg:" User Data Updated"});
  });
});


app.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((err, registeredUser) => {
      if (err) {
        console.log(err)      
      } else {
        let payload = {subject: registeredUser._id}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      }
    })
  })


  app.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({email: userData.email}, (err, user) => {
      if (err) {
        console.log(err)    
      } else {
        if (!user) {
     
          res.status(401).send('Invalid Email')
        } else 
        if ( user.password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: user._id}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token, user})
        }
      }
    })
  })

app.listen(3001, function(){
    console.log('listening to port 3001');
});
