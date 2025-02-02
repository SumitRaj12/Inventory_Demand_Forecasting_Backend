import {validateEmployee} from "../middleware/validator.middleware.js";
import {changePassword,Role} from "../controller/employeeController.js";
import { Router } from "express";

const employeeRouter = Router();

employeeRouter.route("/changePassword").post(validateEmployee,changePassword);
employeeRouter.route("/fetchRole").get(validateEmployee,Role)

export default employeeRouter;