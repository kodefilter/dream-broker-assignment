import express from 'express'
var router = express.Router()

import AnalyzeService from '../services/analyze'

import { BadRequestError, InternalServerError } from '../helpers/apiError'

/* POST to /analyze */
router.post('/', function (req, res, next) {
  
  try {
    const { text } = req.body
    const result = AnalyzeService.analyzeText(text)
    res.json(result)
  } catch (error) {
    
    if (error.name === 'TypeError') {
      
      console.log('Indside Analyze Bad Request',`\x1B[31m${error}`)

      next(new BadRequestError('Invalid Request',error))
    } else {
      console.log('Indside Analyze',`\x1B[31m${error}`)

      next(new InternalServerError('Internal Server Error', error))
    }
  }
})

export default router
