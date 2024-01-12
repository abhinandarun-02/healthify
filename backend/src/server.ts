import 'module-alias/register'

import app from '@/app'

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}!`))

process.on('SIGTERM', function () {
  console.log(`SIGTERM signal received: closing HTTP server.`)
  process.exit()
})

process.on('SIGINT', function () {
  console.log(`SIGINT signal received: closing HTTP server.`)
  process.exit()
})
