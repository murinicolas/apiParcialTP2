import ConexionDB from '../DB.js'


class NumerosDBDAO {

    /*GET ENTRADA*/
    obtenerNumeros = async () => {
        if(!ConexionDB.connection) return {}
        let nros = await ConexionDB.db.collection('numeros').find({}).toArray()
        let valores = []
        nros.forEach(numero => {
            valores.push(numero.numero)
        })
        let listadoNros = {numeros : valores}
        return listadoNros    
    }

    /*GET PROMEDIO*/
    calcularPromedio = async ()  => {
        if(!ConexionDB.connection) return []
        let numeros = await this.obtenerNumeros()
        let valores = numeros.numeros
        let promedioNumerico = 0
        let promedio = {}
        valores.forEach(nro => {
            promedioNumerico += nro
        });
        promedio = {promedio : promedioNumerico/valores.length}
        return promedio
    }

    compararNumeros(a, b) {
        return a - b;
      }

    /*GET MINMAX*/
    obtenerMinMax = async () => {
        if(!ConexionDB.connection) return []
        let numeros = await this.obtenerNumeros()
        let valores = numeros.numeros
        valores.sort(this.compararNumeros)
        let minmax = {min : valores[0], max: valores[valores.length -1]}
        return minmax
    }

    /*GET CANTIDAD*/
    calcularCantidad = async () => {
        if(!ConexionDB.connection) return []
        let numeros = await ConexionDB.db.collection('numeros').find({}).toArray()
        let cantidad = {cantidad : numeros.length}
        return cantidad
    }

    /*POST ENTRADA*/
    ingresarNumero = async nro => {
        if(!ConexionDB.connection) return {}

        nro.numero = parseInt(nro.numero)
        await ConexionDB.db.collection('numeros').insertOne(nro)
        
        return nro    
    }
}

export default NumerosDBDAO
