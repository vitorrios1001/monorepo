import express from 'express'
import cors from 'cors'
import routes from './routes'

const port = process.env.PORS || 3333

const app = express()

app.use(cors())
app.use(routes)

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
