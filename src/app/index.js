
const express = require('express');
const app  = express();
const cors = require("cors");
const cookieParser  = require("cookie-parser");
const authRoutesV1  = require("./../v1/routes/auth.route.js");
const contactRoutesV1 = require('./../v1/routes/contact.route.js');
const specialistRoutesV1 = require('./../v1/routes/specialist.route.js');
const doctorRoutesV1 = require('./../v1/routes/doctor.route.js');
const errorMiddleware  = require("./../middlewares /error.middleware.js");

app.use(
    cors({  
        credentials:true,
        origin:'http://localhost:5173'
    })
)

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
// app.use('/images' ,express.static('./../public'));

// routes --->
app.use('/api/v1', authRoutesV1)
app.use('/api/v1', contactRoutesV1)
app.use('/api/v1', specialistRoutesV1)
app.use('/api/v1', doctorRoutesV1)

app.use(errorMiddleware);

app.listen(process.env.PORT , ()=>{
    console.log("app is running .... ");
})

