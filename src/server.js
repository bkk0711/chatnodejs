import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./configs/viewEngine"
import webRoute from "./routes/web";

let app = express();

viewEngine(app);

webRoute(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend : true}));

let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("App is running use port : " + port)
});