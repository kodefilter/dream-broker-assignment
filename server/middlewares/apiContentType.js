import { BadRequestError } from '../helpers/apiError'

export default function(req, res, next) {
  if ((req.method === 'POST') && !req.is('application/json')) {
    next(new BadRequestError())
  } else {
    next()
  }
}
 