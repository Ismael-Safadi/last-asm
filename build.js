const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router.post('/data',(request,response) => {

    response.send({"message":"Hello","name":"Isamel"})
});
router.get('/greeting/:name',(request,response) => {
    var d = req.param.name;
    
    response.send({"message":"Hello","name":d})
});
app.use( router);
app.listen(3006, () =>
  console.log('app listening on port 3006')
)