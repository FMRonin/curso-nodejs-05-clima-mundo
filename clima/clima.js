const axios = require('axios');

const instance = axios.create({
    baseURL:'http://api.openweathermap.org/data/2.5',
    params:{
        appid:'471c04f85c0a18cce1c0db0529d8c6e6'
    }
})
let getClima = async (lugar) =>{
    
    let respuesta = await instance.get('/weather',{
        params:{
            lat:lugar.lat,
            lon:lugar.lon,
            units:'metric'
        }
    })

    if (!respuesta) throw new Error(`No se pudo determinar el clima de ${lugar.name}`)

    return respuesta.data.main.temp
}

module.exports = {
    getClima
}


