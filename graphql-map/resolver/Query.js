const fetch = require('node-fetch');

const baseURL = 'http://localhost:5000';

const getProvinces = async (_, args) => {
    let response = [];

    await fetch(`${baseURL}/provinces`).then(response => response.json())
    .then(data => {
        response = data;
    })
   // console.log(response)
    return response

}

const getProvinceById = async (_, args) => {
    let response = {}
    console.log(args.id)

    await fetch(`${baseURL}/provinces/${args.id}`).then(res => res.json())
    .then(data => {
        // console.log("data", data)
        response = data[0];
    })
    // console.log(response)
    return response;
}

const getProvinceByName = async (_, args) => {
     let response = [];
    
    await fetch(`${baseURL}/provinces/city/${args.city}`).then(res => res.json())
    .then(data => {
        response = data
    })

    return response;
}


module.exports = {
    getProvinces,
    getProvinceById,
    getProvinceByName,
}