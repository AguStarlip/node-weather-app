const axios = require('axios');


const getLugarLatLong = async(dir) => {

    const encodedURL = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://geocode.xyz/?locate=${encodedURL}&json=1`,
        headers: { 'auth': '806567398271374661834x7084' }
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.standard.city;
    const lat = data.latt;
    const lng = data.longt;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLong
}