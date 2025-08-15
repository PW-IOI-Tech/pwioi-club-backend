import { Router } from "express";
import { authenticateJwt, requireRoles } from "../middlewares/authMiddleware.js";
import { assignCenterHeads, createCenter, getAllCenters } from "../controllers/center.controller.js";

const centerRouter=Router();

centerRouter.post('/create',authenticateJwt,requireRoles('SUPER_ADMIN'),createCenter)

centerRouter.put("/:code/assign-heads", authenticateJwt, requireRoles("SUPER_ADMIN"), assignCenterHeads);

centerRouter.get("/all",authenticateJwt,requireRoles('SUPER_ADMIN'),getAllCenters)
export default centerRouter;