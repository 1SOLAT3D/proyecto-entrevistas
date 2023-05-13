import express from 'express'
import config from './config'

import vacanteRoutes from './routes/vacante.routes';
import prospectoRoutes from './routes/prospecto.routes';
import entrevistasRoutes from './routes/entrevistas.routes';
import morgan from 'morgan';


const app = express()

let port = 6000;

// Settings

app.set('port', config.port)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {

    // Dominio que tengan acceso (ej. 'http://example.com')
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Metodos de solicitud que deseas permitir
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Encabezados que permites (ej. 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Headers', '*');

    next();
})

const cors = require('cors')
app.use(cors())

app.use(vacanteRoutes)
app.use(prospectoRoutes)
app.use(entrevistasRoutes)

export default app