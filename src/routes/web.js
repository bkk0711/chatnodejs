import express from "express";

let router = express.Router();

let initWebRoutes = (app)=>{
    app.get('/' , (req , res)=>{

       res.send('hello from simple server :)')
    
    })

    return app.use('/', router);
}


module.exports = initWebRoutes;