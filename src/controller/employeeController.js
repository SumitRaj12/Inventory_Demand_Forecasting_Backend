import { Company } from "../models/company.model.js";
import { Employee } from "../models/employee.model.js"
import {hashPassword} from "../utils/password.js"
const changePassword = async(req,res)=>{
    try {
        const user = req.user;
        const employee = await Employee.findOne({email:user.email});
        if(!employee){
            return res.status(404).json({
                status:"Not Found",
                message:"Employee not found"
            })
        }
        const {password} = req.body;
        const hash = await hashPassword(password);
        employee.Password=hash;
        if(employee.Role==="Admin"){
            const admin = await Company.findOne({email:user.email});
            admin.Password = hash;
            admin.save();
        }
        employee.save();
        return res.status(200).json({
            status:"Success",
            message:"Password changed successfully"
        })
    } catch (error) {
        return res.status(500).json({
            status:"Internal Server Error",
            message:"Something went wrong"
        })
    }
}

export default changePassword;