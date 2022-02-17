
import express, { Application } from "express";
import dotenv from 'dotenv';
import cors from 'cors';

// Variables de entorno  ******************************
const config = dotenv.config({ path: 'process.env' });

class App{
    
    /* Crear/inicializar el servidor de express  */
    app: Application = express(); 

    /* Environtment - Variables de entorno (process.env)   */
    PORT: any = process.env.PORT;

    constructor(){

        // Configurar Cors
        this.app.use( cors() );

        // Lectura y parseo del body (colocar antes de las 'rutas' )
        this.app.use( express.json() );

        // Directorio público
        this.app.use( express.static('public') );

        this.app.listen( this.PORT, ()=>{
            console.log("servidor corriendo en el puerto "
                         + this.PORT);
        } );

    }

}

new App();
