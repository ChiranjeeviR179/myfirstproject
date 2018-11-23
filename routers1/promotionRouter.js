const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
.all(( req, res, next) => {

    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get(( req, res, next) => {
    
    res.end(' Will send all dishes to you!');
    })
.post((req,res,next) =>{

    res.end(' the dish name is :' +req.body.name+' \n details :'+req.body.description);
})
.put((req,res,next) => {

    res.statusCode = 403;
    
    res.end(' Sorry the following option is not supported in /dishes');
})
.delete((req,res,next)=>{

    res.end("the all dishes deleted");
 });
// .get('/:dishId',( req, res, next) => {
    
//     res.end(' Will send dish '+req.params.dishId+' details to you!');
//     })
// .post('/:dishId',(req,res,next) =>{

//     res.statusCode = 403;
//     res.end(' the post function is not supported in /dishes/'+req.params.dishId);
// })
// .put('/:dishId',(req,res,next) => {

//     res.write('the dish: '+req.params.dishId+' updated');
//     res.end(' the dish name is :' +req.body.name+' \n details :'+req.body.description);
// })
// .delete('/:dishId',(req,res,next)=>{

//     res.end("the dish "+req.params.dishId+" deleted");
// });

module.exports = promotionRouter;
