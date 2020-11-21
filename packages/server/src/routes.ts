import express from 'express'

const routes = express.Router()

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello world' })
})

routes.get('/posts', (request, response) => {
  return response.json({ message: 'new post' })
})

export default routes
