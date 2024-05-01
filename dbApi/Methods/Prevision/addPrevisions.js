const { addDaily } = require('./addDaily.js');
const { addHourly } = require('./addHourly.js')

/**
 * Create hourly and daily previsions in database
 * @async
 * @param {string} cityName - The name of the city
 * @param {object} object - The previsions object
 * @returns {Promise<boolean>} Return 'true' if not error catch (or false)
 */

async function addPrevisions(cityName, object) {
    let result = true
    Promise.all([addHourly(cityName, object), addDaily(cityName, object)])
        .then((result) => {
            console.log("Sucess upload");
        })
        .catch((err) => {
            console.error(err);
            result = false;
        })
    return result;
}

module.exports = { addPrevisions }