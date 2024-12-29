import {validateEmployee} from "../middleware/validator.middleware.js";
import changePassword from "../controller/employeeController.js";
import { Router } from "express";

const employeeRouter = Router();

employeeRouter.route("/changePassword").post(validateEmployee,changePassword);

export default employeeRouter;