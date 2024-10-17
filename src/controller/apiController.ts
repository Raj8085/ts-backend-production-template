import { NextFunction, Request,Response } from "express";
import httpResponse from "../util/httpResponse";
import responseMessage from "../constant/responseMessage";
import httpError from "../util/httpError";

export default {
    self : (req:Request,res:Response,next:NextFunction)=>{
        try {
            throw new Error("Something went wrong")
            httpResponse(req,res,200,responseMessage.SUCCESS,{"id":"id"})
        } catch (err) {
            httpError(next,err,req,500)
        }
    }
} 