/**
 * Create hourly previsions in database
 * @async
 * @param {string} cityName - The name of the city
 * @param {string} countryCode - The code of the country
 * @param {string} stateCode - The code of the state
 * @param {object} object - The previsions object
 * @param Model
 * @returns {Promise<void>} Promise void
 */
async function addHourly(cityName, countryCode, stateCode, object, Model) {
    for (let i in object.hourly.time) {
        await Model.create({
            cityName: cityName,
            countryCode: countryCode,
            stateCode: stateCode,
            latitude: object.latitude,
            longitude: object.longitude,
            daily: false,
            date: object.hourly.time[i].substring(5, 10),
            hour: object.hourly.time[i].substring(11),
            data: {
                weatherCode: object.hourly.weather_code[i],
                relativeHumidity: object.hourly.relative_humidity_2m[i],
                apparentTemperature: object.hourly.apparent_temperature[i],
                precipitationProb: object.hourly.precipitation_probability[i],
                windSpeed: object.hourly.wind_speed_10m[i],
                temperature80m: object.hourly.temperature_80m[i]
            }
        })
    }
}

module.exports = { addHourly }