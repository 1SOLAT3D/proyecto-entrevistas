import { Router } from "express";
import  { createNewEntrevista, deleteEntrevistaById, getEntrevista, getEntrevistaById, getTotalEntrevistas, updateEntrevistaById } from "../controllers/entrevistas.controller";

const router = Router();

router.get("/entrevistas", getEntrevista);

router.post("/entrevistas", createNewEntrevista);

router.get("/entrevistas/count", getTotalEntrevistas);

router.get("/entrevistas/:id", getEntrevistaById);

router.delete("/entrevistas/:id", deleteEntrevistaById);

router.put("/entrevistas/:id", updateEntrevistaById);

export default router;