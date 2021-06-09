const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const app = express();
const cors = require('cors');
const errorHandler = require('errorhandler');
const {mongoose} = require('./database');


/****** 
 * SETTINGS
 ******/
app.set('port', process.env.PORT || 3000);
// Si no existe un puerto establecido por el SO o el server toma el puerto 3000


/****** 
 * MIDDLEWARES
 ******/
app.use(cors());
app.use(morgan('dev'));
app.use(multer({
    dest: path.join(__dirname, '../public/uploads/temp')
}).single('doc'));
app.use(express.urlencoded({extended: false})) // Permite recibir las imágenes que vienen del formulario
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
app.use('/api/recordCounter', require('./routes/recordCounter.routes'));
app.use('/api/events', require('./routes/events.routes'));
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/venues', require('./routes/venues.routes'));

/****** 
 * STATIC FILES
******/
app.use('/public', express.static(path.join(__dirname, '../public')));

/****** 
 * ERRORHANDLERS
******/
if ('development' === app.get('env')) {
    app.use(errorHandler);
}

/****** 
 * STARTING SERVER
 ******/
app.listen(app.get('port'), () => {
    console.log("Sicoain Server running on port " + app.get('port'));
});
