import express from 'express'
import productsRouter from './routes/products'
const app = express()

app.use('/api/products', productsRouter)


