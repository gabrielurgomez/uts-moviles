import express from "express";
import clientesRoutes from "./routes/clientes.routes.js"
import pruebaRoutes from "./routes/prueba.routes.js"
import cors from 'cors';

const app = express();

app.use(cors({ origin: '*' }));

app.use(express.json());

app.use('/api', clientesRoutes);
app.use('/api', pruebaRoutes);

//por si se solicita un enpoint que no exista
app.use((req, res, next) => {
    console.log("peticion a ruta no encontrada, respondiendo eso...")
    res.status(404).json({ message: "enpoint no encontrada" })
})

export default app;