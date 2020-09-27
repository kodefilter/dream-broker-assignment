import express from 'express'
import { BadRequestError, InternalServerError } from '../helpers/apiError'
var router = express.Router()

import AnalyzeService from '../services/analyze'

/* POST to /analyze */
router.post('/', function (req, res, next) {

  if (!req.is('application/json')) {
    next(new BadRequestError('Wrong Content Type'))
  }

  try {
    const { text } = req.body
    const result = AnalyzeService.analyzeText(text)
    res.json(result)
  } catch (error) {
    if (error.name === 'TypeError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(new InternalServerError('Internal Server Error', error))
    }
  }
})

export default router
