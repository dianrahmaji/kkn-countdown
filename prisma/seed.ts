import bcrypt from "bcryptjs";
import { faker } from "@faker-js/faker";
import { PrismaClient } from "./generated";

const prisma = new PrismaClient();

async function seed() {
  // cleanup the existing database
  await prisma.admin.deleteMany();
  await prisma.countdown.deleteMany();
  await prisma.guestBook.deleteMany();
  await prisma.reaction.deleteMany();

  const hashedPassword = await bcrypt.hash("admin123", 10);
  await prisma.admin.create({
    data: { username: "admin", password: { create: { hash: hashedPassword } } },
  });

  const countdowns = await Promise.all(
    Array.from({ length: 10 }, async (_, yearIndex) => {
      Array.from({ length: 4 }, async (_, periodIndex) => {
        const countdown = await prisma.countdown.create({
          data: { period: periodIndex + 1, year: yearIndex + 2020 },
        });

        return countdown;
      });
    }).flat()
  );

  const guestBooks = await Promise.all(
    Array.from({ length: 50 }, async () => {
      const isAnonymous = faker.datatype.boolean();

      const guestBook = await prisma.guestBook.create({
        data: {
          body: faker.lorem.sentences(
            faker.datatype.number({ min: 2, max: 4 })
          ),
          placement: faker.address.city(),
          ...(isAnonymous && { author: faker.name.fullName() }),
        },
      });

      return guestBook;
    })
  );

  const reactions = await Promise.all(
    Array.from({ length: 100 }, async () => {
      const reaction = await prisma.reaction.create({
        data: {
          reaction: faker.internet.emoji({
            types: ["smiley", "food", "nature", "travel", "activity"],
          }),
        },
      });

      return reaction;
    })
  );

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);

    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
