import express from 'express'
import { formController, helloController } from '../controllers.js'

const mw_test = (req, res, next) => {
    console.log(req.url)
    next();
}

const router = express.Router()

router.get('/hello', helloController)
router.post('/form', mw_test, formController)

export default router
