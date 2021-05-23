
const path =require("path");


module.exports =function (serverapp) {

    serverapp.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "./public/notes.html"));
    });

    serverapp.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "./public/index.html"));
    });

};