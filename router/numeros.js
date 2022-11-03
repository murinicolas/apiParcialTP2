import express from 'express'
import ControladorNumeros from '../controller/numerosController.js'


export class RouterNumeros {
    constructor() {
        this.router = express.Router()
        this.controladorNumeros = new ControladorNumeros()
    }

    start() {
        
        /*GET /ENTRADA*/
        this.router.get('/entrada', this.controladorNumeros.obtenerNumeros)
        /*GET /PROMEDIO*/
        this.router.get('/promedio', this.controladorNumeros.calcularPromedio)
        /*GET /MINMAX*/
        this.router.get('/minmax', this.controladorNumeros.obtenerMinMax)
        /*GET /CANTIDAD*/
        this.router.get('/cantidad', this.controladorNumeros.calcularCantidad)
        /*POST /ENTRADA*/
        this.router.post('/entrada', this.controladorNumeros.ingresarNumero)


        return this.router
    }
}
