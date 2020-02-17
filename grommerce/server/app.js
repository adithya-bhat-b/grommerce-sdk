const configuration = require("../config/config.json")
const express = require('express');
const app = express();
const database = require("queries")

const port = configuration.PORT || 3000
app.post('/api/v1/',function(req,res)
{
    dbSequalizer.sync().success(function() {
        db.manageUser(req.body)
    })
    res.send('Ok');
});

app.listen(port, function() {
    console.log(`Server listening on : ${port}`)
    db = new database(configuration.DB)
    dbSequalizer = db.createDb()
    db.defineUser()
});