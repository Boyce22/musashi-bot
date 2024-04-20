const axios = require('axios')

const pokeAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 1000,
})


module.exports = { pokeAPI }
