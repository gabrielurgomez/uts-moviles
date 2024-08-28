import { Router } from "express"
import { pruebaController } from "../controllers/prueba.controller.js"

const router = Router()

router.get("/prueba/cedula/:cedula", pruebaController);

export default router;