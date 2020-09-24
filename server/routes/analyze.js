import express from 'express';
var router = express.Router();

import AnalyzeService from '../services/analyze'

/* POST to /analyze */
router.post('/', function(req, res, next) {
  const { text } = req.body
  const result = AnalyzeService.analyzeText(text)
  res.json(result)
});

export default router
