
const fs = require('fs');
const path = require('path');

const db = path.join(__dirname, '../db/db.json');

var notebackend = require('../db/db');



/* const express = require("express");

const app = express();
app.use(express.json()); */



module.exports = function (serverapp) {
    
    serverapp.get("/api/notes", function (req, res) {
        fs.readFile(db, "utf-8", function (err, data) {

         if (err) { 
           console.log(err);
           }
            const oldnotes = JSON.parse(data);
           
            res.json(oldnotes);

        });
    });

  
    serverapp.post("/api/notes", function (req, res) {
        fs.readFile(db, "utf-8", function (err, data) {
            
            if (err) {
                console.log(err)
            }
            let storednotes;
            if (data) {
                storednotes = JSON.parse(data);
            }
                
            const newnote = req.body;
            

            if (data) {
            storednotes.push(newnote);
            } else {
                storednotes= [newnote];
            }

            fs. writeFile(db, JSON.stringify(storednotes), "utf-8", function (err) {
                if (err) throw err;
                else {
                res.json(newnote)};
                
            })
        });
    });
      
     
     fs.writeFileSync((db), JSON.stringify(notebackend));

     /* res.json(req.body); */

    };
