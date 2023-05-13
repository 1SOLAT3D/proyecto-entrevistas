import { Router } from "express";
import { getVacante, createNewVacante, getVacanteById, deleteVacanteById, updateVacanteById, getTotalVacantes} from "../controllers/vacante.controller";

const router = Router();

router.get("/vacante", getVacante);

router.post("/vacante", createNewVacante);

router.get("/vacante/count", getTotalVacantes);

router.get("/vacante/:id", getVacanteById);

router.delete("/vacante/:id", deleteVacanteById);

router.put("/vacante/:id", updateVacanteById);

export default router;