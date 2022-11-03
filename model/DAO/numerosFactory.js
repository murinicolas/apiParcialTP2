import NumerosMemoriaDAO from './numerosMemoria.js'
import NumerosDBDAO from './numerosDB.js'

class NumerosFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MEM' :
                console.log(' ***** Persistiendo en Memoria ***** ')
                return new NumerosMemoriaDAO()

            case 'MONGO' :
                console.log(' ***** Persistiendo en MongoDB ***** ')
                return new NumerosDBDAO()

            default: 
                console.log(' ***** Persistiendo en default (Memoria) ***** ')
                return new NumerosMemoriaDAO()
        }
    }
}

export default NumerosFactoryDAO