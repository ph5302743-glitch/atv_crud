import express from 'express'
import FilmeController from '../controllers/filme.controller.js'

const router = express.Router();

router.get("/listar", FilmeController.listarTodos)
router.get("/listar/:codigo", FilmeController.listarPorCodigo)
router.post("/adicionar", FilmeController.adicionar)
router.put("/editar/:codigo", FilmeController.atualizarTotal)
router.patch("/editar/parcial/:codigo", FilmeController.atualizarParcial)
router.delete("/excluir/todos", FilmeController.excluirTodos)
router.delete("/excluir/:codigo", FilmeController.excluirPorCodigo)

export default router