const router = require('express').Router();
const mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/myblog';
const userSchema = require('../model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
var BCRYPT_SALT_ROUNDS = 12;



// Collection dans la base de donnee
const userModel = mongoose.model('users', userSchema)
mongoose.connect(db, (err) => {
  console.log('databse connection in port 27017')

  //test backend
  router.get('/', (req, res) => {
    {
      res.status(200).send('home auth ok');
    }
    (error) => {
      res.status(500)
      console.error(error)
    }
  });

// find all users
  router.get('/allusers', async (req, res) => {
    const users = await userModel.find();
    res.send(users);
    (error) => {
      res.sendStatus(500)
      console.error(error)
    }
  });



  // Enregistrement nouveau utilisateur
  router.post('/register', async (req, res) => {
    userModel.findOne({ email: req.body.email }, function (err, user) {
    // Vérification si l'utilisateur existe
    if (user) {
      return res.status(400).send({ message: 'The email exsist.' });
    }
     // Creation du nouveau utilisateur
     req.body.password =   bcrypt.hashSync(req.body.password, BCRYPT_SALT_ROUNDS);
     var newUser = new userModel(req.body);
     res.status(200).send({message:'Success register'});
     newUser.save();

   (error) => {
     res.sendStatus(500)
     console.error(error)
   }


  });

});

  //s'identifier
  router.post('/login', async (req, res) => {
    const result = await userModel.findOne({
      email: req.body.email
    });

    if (!result) {
      res.send({
        message: 'Incorrect Login or Password'
      });
      console.log(result, req.body.email)
    }
    if (result.password !== req.body.password) {
      res.send({
        message: 'Incorrect Login or Password'
      });
      console.log(result, req.body.password)
    } else {
      res.send({
        message: 'ok', userToken : jwt.sign({data:result},'security_pass')
      })
    }

  });

});

// suprrimer utilisateur
router.delete('/removeuser/:id', async (req, res) => {
  const result = await userModel.remove({ _id: req.params.id })
  res.send(result)
});
//mise à jour utilisateur
router.put('/updateuser/:id', async (req, res) => {
  const result = await userModel.update({ _id: req.params.id }, { $set: req.body });
  res.send(result);
});

//find user by id
router.get('/userbyid/:id', async (req, res) => {
  const idUser = {_id: req.params.id}
    const result = await userModel.findById(idUser);
    res.send(result);
  
  });

module.exports = router;
