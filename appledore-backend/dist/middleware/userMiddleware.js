import jwt from 'jsonwebtoken';
import { config } from '../config.js';
export const userMiddleware = (req, res, next) => {
    const token = req.headers['token'];
    const decodedData = jwt.verify(token, config.JWT_SECRET);
    if (decodedData) {
        //@ts-ignore
        req.userId = decodedData.id;
        next();
    }
    else {
        return res.status(403).json({
            msg: 'incorrect creds'
        });
    }
};
//# sourceMappingURL=userMiddleware.js.map