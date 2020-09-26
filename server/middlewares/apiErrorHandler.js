

export default function (error, req, res, next) {


  console.log('Inside Handler',`\x1B[31m${error.statusCode}`);

  const statusCode = error.statusCode || 500  

  res.status(error.statusCode).json({
    status: 'error',
    statusCode: error.statusCode,
    message: error.message,
  })
}
