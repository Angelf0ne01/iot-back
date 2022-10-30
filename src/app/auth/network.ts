import express, { Request, Response, NextFunction } from 'express'
import controller from './controller'
import response from '../../shared/network/response'

const router = express.Router()

router.post('/', login)

function login(req: Request, resp: Response, next: NextFunction) {
    controller
        .login(req.body)
        .then((data) => response.success(req, resp, data, 200))
        .catch(next)
}

export default router
