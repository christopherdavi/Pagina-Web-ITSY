const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(morgan('dev'));

/**
 * MOTOR DE PLANTILLAS
 */
 app.set('views', path.join(__dirname,'views'));
 app.engine('.hbs',exphbs.engine({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname: '.hbs',
    }));
 app.set('view engine', '.hbs');


/**
 * RUTAS
 */
//public
app.use(express.static(path.join(__dirname ,'public')));

 app.use(require('./routes/index.route'));

/**
 * EJECUTAR SREVIDOR
 */
const port = process.env.PORT|| 2323;
app.listen(port, ()=>{
    console.log(app.get('views'));
    console.log('listening on port ' + port);
})