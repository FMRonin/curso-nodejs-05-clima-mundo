const axios = require('axios');

const instance = axios.create({
    baseURL:'http://api.weatherapi.com/v1',
    params:{
        key:'d491eef9a990494d8ee130421212401'
    }
})
let getLugar = async (direccion) =>{

    let respuesta = await instance.get('/current.json',{params:{q:direccion}})

    if (!respuesta) throw new Error(`No se pudo determinar las coordenadas de ${direccion}`)

    let location = respuesta.data.location

    //console.log(location);

    return {
        direccion:location.name,
        lat:location.lat,
        lon:location.lon
    }
}

module.exports = {
    getLugar
}


