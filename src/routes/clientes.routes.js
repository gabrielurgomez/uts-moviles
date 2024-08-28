import { Router } from "express"
import { consClientes, crearCliente } from "../controllers/clientes.controller.js"

const router = Router()

router.get("/clientes", consClientes);
router.post("/crearcliente", crearCliente);

export default router;