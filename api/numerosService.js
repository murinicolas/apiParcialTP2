import config from '../config.js'
import NumerosFactoryDAO from '../model/DAO/numerosFactory.js'


class ApiNumeros {
    constructor() {
        this.numerosModel = NumerosFactoryDAO.get(config.MODO_PERSISTENCIA)
    }

    obtenerNumeros = async () => {
        return await this.numerosModel.obtenerNumeros()
    }

    calcularPromedio = async () => {
        return await this.numerosModel.calcularPromedio()
    }

    calcularCantidad = async () => {
        return await this.numerosModel.calcularCantidad()
    }

    obtenerMinMax = async () => {
        return await this.numerosModel.obtenerMinMax()
    }

    ingresarNumero = async (numero) => {
        return await this.numerosModel.ingresarNumero(numero)
    }

}

export default ApiNumeros