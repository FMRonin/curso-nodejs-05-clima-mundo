/* 
 * Aplicación para optener el clima en una ciudad
 * 
 * commando de entrada -d <ciudad>
 * 
 * Respuesta clima de la ciudad
 * 
 */

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const { getLugar } = require('./lugar/lugar')
const { getClima } = require('./clima/clima')

const argv= yargs(hideBin(process.argv)).options({
    direccion: {
        alias:'d',
        desc: 'Dirección para obtener el clima'
    }
}).argv

let getInfo = async (direccion) => {

    try {
        let lugar = await getLugar(direccion)
        let clima = await getClima(lugar)
        return `La temperatura de ${lugar.direccion} es de: ${clima} grados centigrados`
    } catch (error) {
       throw new Error(`No se pude establecer temperatura de la dirección ${direccion}`) 
    }
    
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)