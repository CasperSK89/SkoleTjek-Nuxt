import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seedUsers() {
  const user = [
    {
        email: 'user3@example.com',
        name: 'Alice Johnson',
        password: 'password3',
      },
      {
        email: 'user4@example.com',
        name: 'Bob Brown',
        password: 'password4',
      },
      {
        email: 'user5@example.com',
        name: 'Emma Wilson',
        password: 'password5',
      },
      {
        email: 'user6@example.com',
        name: 'James Lee',
        password: 'password6',
      },
      {
        email: 'user7@example.com',
        name: 'Lily Garcia',
        password: 'password7',
      },
      {
        email: 'user8@example.com',
        name: 'Daniel Martinez',
        password: 'password8',
      },
      {
        email: 'user9@example.com',
        name: 'Olivia Davis',
        password: 'password9',
      },
      {
        email: 'user10@example.com',
        name: 'Sophia Clark',
        password: 'password10',
      },
      {
        email: 'user11@example.com',
        name: 'Michael White',
        password: 'password11',
      },
      {
        email: 'user12@example.com',
        name: 'Emily Thomas',
        password: 'password12',
      },
      {
        email: 'user13@example.com',
        name: 'Matthew Hall',
        password: 'password13',
      },
      {
        email: 'user14@example.com',
        name: 'Ava Turner',
        password: 'password14',
      },
      {
        email: 'user15@example.com',
        name: 'Christopher King',
        password: 'password15',
      },
      {
        email: 'user16@example.com',
        name: 'Grace Lewis',
        password: 'password16',
      },
      {
        email: 'user17@example.com',
        name: 'Andrew Scott',
        password: 'password17',
      },
      {
        email: 'user18@example.com',
        name: 'Mia Martin',
        password: 'password18',
      },
      {
        email: 'user19@example.com',
        name: 'William Turner',
        password: 'password19',
      },
      {
        email: 'user20@example.com',
        name: 'Sofia Adams',
        password: 'password20',
      }
      
  ];

  const seededUsers = [];

  for (const userData of user) {
    const user = await prisma.user.upsert({
      where: { email: userData.email },
      update: {},
      create: {
        email: userData.email,
        name: userData.name,
        password: userData.password,
      },
    });
    seededUsers.push(user);
  }

  return seededUsers;
}

async function main() {
  try {
    const seededUsers = await seedUsers();
    console.log('Seeded users:', seededUsers);
  } catch (error) {
    console.error('Error seeding users:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
