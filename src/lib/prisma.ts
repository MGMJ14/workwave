// import { PrismaClient } from '@prisma/client';

// interface Global {
//   prisma: PrismaClient;
// }

// declare const global: Global;

// let prisma: PrismaClient;

// if (!global.prisma) {
//   global.prisma = new PrismaClient();
// }

// prisma = global.prisma;

// export default prisma;

import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  });

export default prisma;

if (process.env.NODE_ENV === 'production') globalForPrisma.prisma = prisma;
