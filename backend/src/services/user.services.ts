import prisma from '@/lib/prismadb'

export class UserService {
  static async getUsers() {
    try {
      const users = await prisma.user.findMany()
      return users
    } catch (error) {
      console.error(error)
      throw new Error('Internal Server Error')
    }
  }
}
