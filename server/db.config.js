const dbName = 'food-ordering';
const dbHost = 'localhos';
const dbPort = 27017;
module.exports = {
    url: `mongodb://${dbHost}:${dbPort}/${dbName}`
}