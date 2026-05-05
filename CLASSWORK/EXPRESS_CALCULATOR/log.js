app.use(function(req, res, next)){
  const url
  const timestamp
  const method

  fs.writeFile(
    "logs.txt",
    `${timestamp}${url}${method}`
    {flag : 'a'}

  )
}