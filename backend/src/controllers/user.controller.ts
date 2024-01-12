import { UserService } from '@/services/user.services'
import { Request, Response } from 'express'

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getUsers()
    res.status(200).json(users)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
