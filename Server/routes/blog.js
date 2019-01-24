const router = require('express').Router();
const mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/myblog';


const userSchema = require('../model/user');
const userModel = mongoose.model('users', userSchema);

const articleShema = require('../model/article');
const articleModel = mongoose.model('article', articleShema);

const commentShema = require('../model/comment');
const commentModel = mongoose.model('comment', commentShema);

var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({
  storage: storage
});

//const allArticles = mongoose.model('articles', allArticles)
mongoose.connect(db, (err) => {
  console.log('databse connection in port 27017')

});


// upload image

router.post('/upload', upload.single('file'), function (req, res, next) {
  res.send(req.file);


    });
//post article
router.post('/article', async (req, res) => {
const newArticle =  await new articleModel(req.body);
newArticle.imagePath = newArticle.imagePath.replace("C:\\fakepath\\","uploads/");
 res.send({message:'article add ok'});
  newArticle.save();
  (error) => {
    res.sendStatus(500)
    console.error(error)
  }

})
//find all articles
router.get('/article', async (req, res) => {
const getArticle = await articleModel.find().populate({ path: 'author' }).populate({ path: 'comments' });
;
res.send(getArticle);
(error) => {
  res.sendStatus(500)
  console.error(error)
}

});

//find article by id
router.get('/article/:id', async (req, res) => {
const idArticle = {_id: req.params.id}
  const result = await articleModel.findById(idArticle).populate({ path: 'author' }).populate({ path: 'comments' });
  res.send(result);

});

//find article by user id
router.get('/articleuser/:id', async (req, res) =>{
  const result = await articleModel.find({author:req.params.id}).populate({ path: 'author' }).populate({ path: 'comments' });
  res.send(result);

});

//update article with id
router.put('/article/:id', async (req, res) => {
  const updtArticle = { _id: req.params.id }
  const result = await articleModel.update((updtArticle), { $set: req.body });
  res.send(result);
});

//remove article by id
router.delete('/article/:id', async (req, res) => {
  const deleteArticle = { _id: req.params.id };
  articleModel.findByIdAndRemove(deleteArticle, (err, sub) => {
    if (err) return res.status(500).send(err);
    const response = {
        message: "delete OK",
    };
    return res.status(200).send(response);
});
});
// find comment
router.get('/comment', async (req, res) => {
  const getComment = await commentModel.find().populate({ path: 'comments' }) ;
  res.send(getComment);

  (error) => {
    res.sendStatus(500)
    console.error(error)
  }
  });

  //add commentaire
router.post('/comment/:idarticle', async (req, res) => {
 idParams = { _id: req.params.idarticle }
  const newComment =  await new commentModel(req.body);
  const result= await articleModel.updateOne( idParams, { $push: { comments: newComment } });
newComment.save();
  res.send(result);
  console.log('resultttt ici', result)
});

 //delete commentaire
 router.delete('/comment/:id', async (req, res) => {
  const result = await commentModel.remove({ _id: req.params.id });
  res.send(result)
});

//saerch with title article
router.get('/search/:title', function(req, res, next) {
  var searchContent = { title: req.params.title };

  if(req.params.title)
console.log('search', searchContent)
    articleModel.find(searchContent, function(err, mysearch){
    if (err) {
      res.status(400);
      res.send();
    }
    res.send(mysearch);
  })
});

module.exports = router;
