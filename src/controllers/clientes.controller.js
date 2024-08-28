//import { pool } from "../db.js"

export const consClientes = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM clientes");
        console.log(rows)
        res.json(rows);
    } catch (error) {
        console.log("problema en la conexion con la BD, respondiendo con estado 500...")
        return res.status(500).json({ message: "algo salio mal" })
    }
}
export const crearCliente = async (req, res) => {
    try {
        const { cedula, nombre, edad } = req.body;
        console.log("datos recibidos", cedula, nombre, edad);
        const [rows] = await pool.query("INSERT INTO clientes (cedula,nombre,edad) VALUES (?,?,?)", [cedula, nombre, edad])
        console.log(rows)
        res.send({ mensaje:"cliente guardado", id: rows.insertId })    }
    catch (error) {
        return res.status(500).json({ message: "algo salio mal" })
    }
}


