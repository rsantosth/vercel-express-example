const constants = require("../constants");
const axiosInstance = require("../api/axiosInstance");

const LocationService = {
    getLocationByCityName: async (cityName) => {
        const { data } = await axiosInstance.get('/reference-data/locations', {
            params: {
                'locationType': 'CITY',
                'cityName': `${cityName}|exact`,
                'vesselOperatorCarrierCodesort': constants.VesselOperatorCarrierCode,
                'sort': 'countryName,cityName:desc'
            }
        });

        if (data && data.length > 0) {
            return data[0];
        }

        return undefined;
    }
}

module.exports = LocationService;