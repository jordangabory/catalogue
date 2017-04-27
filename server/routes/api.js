const mongoose = require('mongoose');
const  express = require('express');
const  router  = express.Router();

/* GET api listing */

const mongolab =  'mongodb://jordangab972:wakfudjgbn972@ds147069.mlab.com:47069/meean';

mongoose.connect(mongolab);
var  conn = mongoose.connection;

const products =  new mongoose.Schema({
    name: String, 
    code :  String, 
    description:  String, 
    tarif : String, 
    poids: String, 
});

const Product  = mongoose.model('Products', products );

router.get('/',  (req, res) => {
    res.send('api  works');
});

/* Get  all users */
router.get('/products', (req, res) =>{
    Product.find({},  (err, users) =>{
        if (err){
            res.status(500).send(error)
        }else{
            res.status(200).json(users);
        }
    })
});

/* GET one users. */
router.get('/products/:id', (req, res) => {
    Product.findById(req.param.id, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(users);
    });
});

/* Create a user. */
router.post('/products', (req, res) => {
    let user = new Product({
        name: req.body.name,
        code: req.body.code,
        description: req.body.description,
        tarif : req.body.tarif,
        poids : req.body.poids,
        catalogue_id : req.body.catlogue_id
    });

    user.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'User created successfully'
        });
    });
});

// Delete Product
router.delete('/products/:id', function(req, res, next){
    Product.remove({
        _id: req.body.id
    }, '', function(err, result){
        if(err){
            res.send(err); 
        } else {
            res.json(result);
        }
    });
});


module.exports = router; 