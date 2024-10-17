import { Request, Response } from "express";
import { EApplicationEnvironment } from "../constant/application";
import config from "../config/config";
import { THttpResponse } from "../types/types";

export default(req:Request,res:Response,responseStatusCode:number,responseMessage:string,data:unknown=null):void=>{
    const response : THttpResponse = {
        success : true,
        statusCode : responseStatusCode,
        request : {
            ip : req.ip || null,
            method : req.method,
            url : req.originalUrl
        },
        message : responseMessage,
        data : data
    }
    // eslint-disable-next-line no-console
    console.info(`CONTROLLER_RESPONSE`,{
        meta : res
    })
    if(config.ENV === EApplicationEnvironment.PRODUCTION){
        delete response.request.ip
    }
    res.status(responseStatusCode).json(response)
}