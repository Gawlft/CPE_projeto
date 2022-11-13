const ENVIROMENT = process.env.NODE_ENV || 'development';
const configuration  = require('../../knexfile')[ENVIROMENT];
console.log(configuration);

const connection = require('knex')(configuration);
module.exports = connection;