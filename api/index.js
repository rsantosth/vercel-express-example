const express = require("express");
const axios = require("axios");
const app = express();

const mockResponse = require('../apiResponse');
const axiosInstance = require('./axiosInstance');

app.use(express.json());

app.get("/status", (req, res) => res.send("API is online"));

app.post("/cargo-routes", async (req, res) => {
    try {
        if (req.body && req.body.context) {
            const { data } = await axiosInstance.get('/products/ocean-products', {
                params: {
                    'collectionOriginCountryCode': 'BR',
                    'collectionOriginCityName': 'Santos',
                    'deliveryDestinationCountryCode': 'NL',
                    'deliveryDestinationCityName': 'Rotterdam',
                    'vesselOperatorCarrierCode': 'MAEU'
                }
            });
            res.status(200).json(data);
        }

        res.status(204);
    } catch (err) {
        console.error("DEU ERRO: ", err);
        res.status(500);
    }
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;