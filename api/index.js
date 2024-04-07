const express = require("express");
const moment = require("moment");
const app = express();

const axiosInstance = require('./axiosInstance');

const mockResponse = require('../apiResponse');
const constants = require('../constants');
const locationService = require('../services/locations');
const ResponseBuilder = require('../responseBuilder');

app.use(express.json());

app.get("/status", (req, res) => res.send("API is online"));

app.post("/cargo-routes", async (req, res) => {
    try {
        if (req.body && req.body.context) {

            const [originLocation, destLocation] = await Promise.all([
                locationService.getLocationByCityName(req.body.context.origin),
                locationService.getLocationByCityName(req.body.context.destination)
            ]);

            if (!originLocation || !destLocation) res.status(404).send("Não foram encontradas as localidades informadas.");

            const { data } = await axiosInstance.get('/products/ocean-products', {
                params: {
                    'collectionOriginCountryCode': originLocation.countryCode,
                    'collectionOriginCityName': originLocation.cityName,
                    'deliveryDestinationCountryCode': destLocation.countryCode,
                    'deliveryDestinationCityName': destLocation.cityName,
                    'vesselOperatorCarrierCode': constants.VesselOperatorCarrierCode
                }
            });

            if (data && data.oceanProducts && data.oceanProducts.length > 0) {
                const builder = new ResponseBuilder();
                data.oceanProducts.forEach(product => {
                    product.transportSchedules.forEach((schedule) => {
                        builder.addTextResponse(`Navio ${schedule.firstDepartureVessel.vesselName} (${schedule.firstDepartureVessel.vesselIMONumber}) - Partida: ${moment(schedule.departureDateTime).format("DD/MM/yyyy HH:mm")} / Chegada: ${moment(schedule.arrivalDateTime).format("DD/MM/yyyy HH:mm")}`);
                    });
                });

                res.status(200).json(builder.getResponse());
            }
        }

        res.status(204);
    } catch (err) {
        if (err.response.data.message === 'Data not found') {
            res.status(204).send("Não há horários disponíveis para a combinação pesquisada.");
            return;
        }

        console.error("ERROR: ", err.response);
        res.status(500).send("Ocorreu um erro insperado!");
    }
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;