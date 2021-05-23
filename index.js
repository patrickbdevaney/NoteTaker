const express = require("express");

const serverapp= express();

const PORT= process.env.PORT || 2500

serverapp.use(express.urlencoded({ extended:true}));

serverapp.use(express.json());

//serverapp.use (express.static('public'))

require('./route/api') (serverapp);

require ('./route/html') (serverapp);

serverapp.listen(PORT, function () {
    console.log("Listening on PORT: " + PORT);
});
