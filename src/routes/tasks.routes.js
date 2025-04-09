const { Router } = require("express")

const router = Router();

router.get("/tasks", (req, res) => {
    res.send("retornando todas las tareas")
})
router.get("/tasks/:id", (req, res) => {
    res.send("retornando una tarea")
})
router.post("/tasks", (req, res) => {
    res.send("creando una tarea")
})
router.delete("/tasks", (req, res) => {
    res.send("eliminando una tarea")
})
router.put("/tasks", (req, res) => {
    res.send("actualizando una tarea")
})
module.exports = router