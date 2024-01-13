import { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionaries';
import prisma from '@/lib/prisma';
import { User } from '@prisma/client';

export default async function Home({ params }: { params: { lang: Locale } }) {

  const dict: {hello:string} = await getDictionary(params.lang)
  console.log(dict)

  const users:User[] = await prisma.user.findMany();
  return (
    <main className="flex flex-col gap-12 px-14">
      <h1>{dict.hello} {users[0].name}</h1>
      {JSON.stringify(users)}
    </main>
  )
}
