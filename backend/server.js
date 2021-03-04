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
app.use('/api/arls', require('./routes/arls.routes'));
app.use('/api/companies', require('./routes/companies.routes'));
app.use('/api/departments', require('./routes/departments.routes'));
app.use('/api/employees', require('./routes/employees.routes'));
app.use('/api/epss', require('./routes/epss.routes'));
app.use('/api/municipalities', require('./routes/municipalities.routes'));
app.use('/api/positions', require('./routes/positions.routes'));
app.use('/api/records', require('./routes/records.routes'));
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/venues', require('./routes/venues.routes'));

/****** 
 * STARTING SERVER
 ******/
app.listen(app.get('port'), () => {
    console.log("Sicoain Server running on port " + app.get('port'));
});