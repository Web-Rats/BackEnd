const mongoose = require('mongoose');
const { hourlyPrevSchema } = require('../../Schema/hourlyPrev.js');
const { dailyPrevSchema } = require('../../Schema/dailyPrev.js');

async function findWeather(cityName, endD, startD = undefined) {
    let schema = hourlyPrevSchema
    let daily = true


    let sd = undefined
    let sy = undefined

    if (startD != undefined) {
        schema = dailyPrevSchema
        daily = false

        sy = startD.substring(0, 4)
        sd = startD.substring(5, 10)
    }

    if ((startD != undefined && startD.length != 10) || endD.length != 10) {
        return false
    }

    let year = endD.substring(0, 4)
    let date = endD.substring(5, 10)

    const Model = mongoose.model(year, schema);
    let result
    if (daily) {
        result = await Model.find({ "daily": true, "date": date, "cityName": cityName })
    } else {
        result = await Model.find({
            "daily": true, "cityName": cityName,
            "date": {
                $gte: sd,
                $lt: date
            }
        })
    }

    return result
}

module.exports = { findWeather }