import { Request, Response, NextFunction } from "express";
import { IParticipation } from "../schemas/participation";


class ParticipationController {
    public create(req: Request, res: Response, next: NextFunction): Response {
         const part: IParticipation = req.body
        // console.log(part)
        //res.status(200).send({firstName: part.firstName, lastName: part.lastName, participation: part.participation})
        next()
    }
}

export default new ParticipationController()
