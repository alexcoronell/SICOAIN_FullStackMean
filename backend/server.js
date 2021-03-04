const express = require('express');
const morgan = require('morgan');
const app = express();

const {
    mongoose
} = require('./database');

/****** 
 * SETTINGS
 ******/
app.set('port', process.env.PORT || 3000); // Si no existe un puerto establecido por el SO o el server toma el puerto 3000

/****** 
 * MIDDLEWARES
 ******/
app.use(morgan('dev'));
app.use(express.json());


/****** 
 * ROUTES
 ******/
app.use('/users', require('./routes/user.routes'));
app.use('/arls', require('./routes/arl.routes'));
app.use('/venues', require('./routes/venues.routes.'))


/****** 
 * STARTING SERVER
 ******/
app.listen(app.get('port'), () => {
    console.log("Sicoain Server running on port " + app.get('port'));
});