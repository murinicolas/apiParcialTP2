import ApiNumeros from '../api/numerosService.js'


class ControladorNumeros {

    constructor() {
        this.apiNumeros = new ApiNumeros()
    }

    obtenerNumeros = async (req,res) => {
        res.json( await this.apiNumeros.obtenerNumeros() )
    }

    calcularPromedio = async(req,res) => {
        res.json(await this.apiNumeros.calcularPromedio())
    }

    calcularCantidad = async(req,res) => {
        res.json(await this.apiNumeros.calcularCantidad())
    }

    obtenerMinMax = async (req,res) => {
        res.json(await this.apiNumeros.obtenerMinMax())
    }

    ingresarNumero = async (req,res) => {
        const numero = req.body
        res.json(await this.apiNumeros.ingresarNumero(numero))
    }
}

export default ControladorNumeros