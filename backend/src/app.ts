import express, { Request, Response } from 'express'

import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import dotenv from 'dotenv'

import userRoutes from '@/routes/user.router'

dotenv.config()

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/', userRoutes)

app.get('/server-status', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Server up and running!' })
})

export default app
