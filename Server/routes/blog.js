const router = require('express').Router();
const mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/myblog';


const userSchema = require('../model/user');
const userModel = mongoose.model('users', userSchema);

const articleShema = require('../model/article');
const articleModel = mongoose.model('article', articleShema);

const commentShema = require('../model/comment');
const commentModel = mongoose.model('comment', commentShema);



//const allArticles = mongoose.model('articles', allArticles)
mongoose.connect(db, (err) => {
  console.log('databse connection in port 27017')

});

//ajout article
router.post('/article', async (req, res) => {
const newArticle =  await new articleModel(req.body);
  console.log("article", newArticle)
  res.send({message:'article add ok'});
  newArticle.save();
  (error) => {
    res.sendStatus(500)
    console.error(error)
  }

})
//find article
router.get('/article', async (req, res) => {
const getArticle = await articleModel.find().populate({ path: 'author' }).populate({ path: 'comment' });
res.send(getArticle);
(error) => {
  res.sendStatus(500)
  console.error(error)
}

});

//find article by id
router.get('/article/:id', async (req, res) => {
  const idArticle = {_id: ObjectID(req.params.id)}
  const result = await articleModel.findById({_id: ObjectID(req.params.id)}).populate({ path: 'author' }).populate({ path: 'comment' });
  res.send(result)
});


module.exports = router;
