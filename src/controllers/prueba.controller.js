export const pruebaController = async (req, res) => {
    try {
        const { cedula } = req.params;
        console.log("cedula recibida", cedula);
        switch (cedula) {
            case "1098675890": {
                return res.status(200).json({ message: "El cliente es Maria Angelica" })
            }
            case "1098675891": {
                return res.status(200).json({ message: "El cliente es Juan David" })
            }
            case "1098675892": {
                return res.status(200).json({ message: "El cliente es Luisa Fernanda" })
            }
            default: {
                return res.status(404).json({
                    message: "El cliente no se encuentra en la base de datos"
                })
            }
        }
    }
    catch (error) {
        console.log("Error al disparar prueba...")
        return res.status(500).json({ message: "algo salio mal" })
    }
}