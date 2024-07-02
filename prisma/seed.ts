import { PrismaClient } from '@prisma/client'
import {faker} from '@faker-js/faker'


 const prisma = new PrismaClient()

async function main() {
  // await prisma.user.createMany({
  //   data: Array.from({length : 30}, ()=>{
  //     return {
  //       email: faker.internet.email(),
  //       name: faker.person.fullName(),
  //       address: {
  //         street: faker.location.street(),
  //         state: faker.location.state(),
  //         city: faker.location.city(),
  //         zip: faker.location.zipCode(),
  //       }
  //   }
  //   })
  // })

  // await prisma.todo.createMany({
  //   data: Array.from({length : 30}, ()=>{
  //     return {
  //       title: faker.lorem.text(),
  //       body: faker.lorem.paragraph(),
  //   }
  //   })
  // })
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })