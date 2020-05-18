const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const symbolRouter = express.Router();
symbolRouter.use(bodyParser.json());

symbolRouter.route("/data").get(async (req, res, next) => {

    try {
        console.log("control")
        let data  = await axios.get('https://jsapi.maps.arcgis.com/sharing/rest/content/items/30cfbf36efd64ccf92136201d9e852af/data');
        res.send(data);
    }
    catch(e) {
        res.send(e);
    }
})

module.exports = symbolRouter;