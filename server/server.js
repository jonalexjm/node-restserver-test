require('./config/config')
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
 
app.get('/usuario', function (req, res) {
  res.json('get usuarios')
})


app.post('/usuario', function (req, res) {

    let body = req.body;

    if( body.nombre === undefined){
        res.status(400).json({
            ok : false,
            message : 'el nombre es necesario'
        })
    }else {
        res.json({
            persona : body
        });
    }

  });

app.put('/usuario/:id', function (req, res) {
    let id = req.params.id
    res.json(`put usuarios con id ${id}`)
  });

app.delete('/usuario', function (req, res) {
    res.json('delete usuarios')
  });
 
app.listen(process.env.PORT, () => {
    console.log(`escuchando el puerto ${process.env.PORT}` )
});