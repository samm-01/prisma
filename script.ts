import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const user = await prisma.user.create({
    data: {
      name: "Kyle",
      email: "kyle@test.com",
      age: 25,
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    // include: {
    //   userPreference: true,
    // },
    select: {
      name: true,
      // email: true,
      // age: true,
      userPreference: true,
    },
  });
  console.log(user);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
