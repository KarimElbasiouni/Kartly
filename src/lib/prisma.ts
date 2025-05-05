import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate'

// Declare a global variable to hold the Prisma Client instance
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Initialize Prisma Client, reusing the instance if it exists (good for development)
// or creating a new one.
const prisma = (global.prisma ?? new PrismaClient()).$extends(withAccelerate())


// In development, assign the instance to the global variable.
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;
