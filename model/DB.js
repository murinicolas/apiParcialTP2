import { MongoClient } from "mongodb"
import config from '../config.js'

class ConexionDB {
    static connection = false
    static db
    static client

    static conectar = async _ => {
        try {
            console.log('Conectando a la BD')
            ConexionDB.client = new MongoClient(config.STRCNX,{
                useNewUrlParser: true,
                useUnifiedTopology: true
            })

            await ConexionDB.client.connect()
            console.log('Conexión establecida.')

            ConexionDB.db = ConexionDB.client.db(config.BASE)
            ConexionDB.connection = true
        }
        catch(error) {
            console.log(`Error en la conexión de base datos: ${error.message}`)
        }
    }

    static desconectar = async () => {
        if(!ConexionDB.connection) return
        await ConexionDB.client.close()
    }
}

export default ConexionDB