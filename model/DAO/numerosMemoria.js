class NumerosMemoriaDAO {

    constructor() {
        this.numeros = [3, 11, 26]
    }

    obtenerNumeros = async () => {
        let numeros = {numeros : this.numeros}
        return numeros    
    }

    calcularPromedio = async ()  => {
        try {
            let promedio = {}
            let promedioNumerico = 0
            this.numeros.forEach(numero => {
                promedioNumerico += numero
            });
            promedio = {promedio : promedioNumerico/this.numeros.length}
            return promedio
        }
        catch {
            return []
        }
    }

    compararNumeros(a, b) {
        return a - b;
      }

    obtenerMinMax = async () => {
        let valores = this.numeros.sort(this.compararNumeros)
        let minmax = {min : valores[0], max: valores[valores.length -1]}
        return minmax  
    }

    calcularCantidad = async () => {
        try {
            return {cantidad : this.numeros.length}
        }
        catch {
            return []
        }
    }

    ingresarNumero = async nro => {
        try { 
            this.numeros.push(nro.numero)
            return this.numeros
        }
        catch {
            return []
        }
    }
}

export default NumerosMemoriaDAO
