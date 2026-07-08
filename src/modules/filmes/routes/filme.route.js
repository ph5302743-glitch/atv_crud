import express from  'express'
import FilmeController from '../controllers/filme.controller.js'

const router = express.Router("/");

router.get("/listar", FilmeController.listar)
router.get("/listar/:codigo", FilmeController.listarporcodigo)
router.post("/adicionar", FilmeController.adicionar)
router.put("/editar/total/:matricula", FilmeController.atualizarTotal)
router.patch("/listar/parcial/:matricula", FilmeController.atualizarParcial)
router.delete("/excluir/:codigo", FilmeController.excluirPorCodigo)
router.delete("/excluir/:todos", FilmeController.excluirTodos)

export default router