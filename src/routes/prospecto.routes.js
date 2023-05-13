import { Router } from "express";
import { getProspecto, createNewProspecto, getTotalProspectos, getProspectoById, deleteProspectoById, updateProspectoById} from "../controllers/prospecto.controller";

const router = Router();

router.get("/prospecto", getProspecto);

router.post("/prospecto", createNewProspecto);

router.get("/prospecto/count", getTotalProspectos);

router.get("/prospecto/:id", getProspectoById);

router.delete("/prospecto/:id", deleteProspectoById);

router.put("/prospecto/:id", updateProspectoById);

export default router;