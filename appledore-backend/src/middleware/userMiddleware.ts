import jwt from 'jsonwebtoken'
import { config } from '../config.js'
import type { Request, Response, NextFunction } from 'express';

export const userMiddleware = (req: Request, res: Response, next: NextFunction)=>{
    const token = req.headers['token']; 
    const decodedData=jwt.verify(token as string,config.JWT_SECRET) as any;

    if(decodedData){
        //@ts-ignore
        req.userId=decodedData.id;
        next();
    }
    else{
        return res.status(403).json({
            msg: 'incorrect creds'
        })
    }
}