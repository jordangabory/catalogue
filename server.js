const  express  =  require('express'); 
const  path  =  require('path');
const http =  require('http'); 
const bodyparser = require('body-parser');


// GET  our  API  routes 
const  api  = require('./server/routes/api');

const app = express();

//Parsers for  POST  data 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended : false}));

// Cross Origin middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})


//Point  static  path  to dist 
app.use(express.static(path.join(__dirname, 'dist')));


app.use('/api',  api);

app.get('*' , (req,  res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 *  GET  port  from environment  and  store  in express
 */

const  port  =  process.env.PORT || '3000';
app.set('port', port);


/**
 * Create  HTTP server
 */
const server = http.createServer(app);

/**
 *  Listen  on provided  port  , on  all  network  inerfaces
 */

server.listen(port,  () =>console.log('API  running on localhost:  '+ port ));