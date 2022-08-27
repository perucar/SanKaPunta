const fetch = require('node-fetch');

const baseURL = 'http://localhost:5000';

const getProvinces = async (_, args) => {
    let response = [];

    await fetch(`${baseURL}/provinces`).then(response => response.json())
    .then(data => {
        console.log(data);
    })

}

module.exports = {
    getProvinces
}