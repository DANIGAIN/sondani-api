const express = require('express');
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require('path')
const authRoutesV1 = require("./../v1/routes/auth.route.js");
const doctorRoutesV1 = require('./../v1/routes/doctor.route.js');
const serviceRoutesV1 = require('./../v1/routes/service.route.js');
const contactRoutesV1 = require('./../v1/routes/contact.route.js');
const specialistRoutesV1 = require('./../v1/routes/specialist.route.js');
const appointmentRoutesV1 = require('./../v1/routes/appointment.route.js');
const errorMiddleware = require("./../middlewares/error.middleware.js");
require('dotenv').config()
app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const d = path.join(__dirname, '../../', '/public')

app.use('/images', express.static(d))


app.use('/api/v1', authRoutesV1)
app.use('/api/v1', contactRoutesV1)
app.use('/api/v1', specialistRoutesV1)
app.use('/api/v1', doctorRoutesV1)
app.use('/api/v1', serviceRoutesV1)
app.use('/api/v1', appointmentRoutesV1)


app.use(errorMiddleware);


app.listen(process.env.PORT, () => {
    console.log(`app is running .... ${process.env.PORT}`);
})