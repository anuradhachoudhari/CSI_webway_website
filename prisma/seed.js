const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.event.create({
    data: {
      title: "Freshers' Orientation",
      description: "Kickoff for new students with clubs & activities.",
      date: new Date("2025-09-10T10:00:00Z"),
      location: "College Auditorium",
    },
  });

  await prisma.club.create({
    data: { name: "Coding Club", description: "Workshops & competitions." },
  });

  await prisma.gallery.create({
    data: { imageUrl: "https://placehold.co/600x400", caption: "Campus Life" },
  });

  await prisma.studentSpotlight.create({
    data: { name: "Asha Patil", story: "Won the national hackathon with her team." },
  });

  await prisma.beyondCampus.create({
    data: { title: "Internship: MegaCorp", link: "https://example.com/megacorp-intern" },
  });

  console.log("Seed completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
