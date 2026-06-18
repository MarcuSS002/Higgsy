import {PrismaClient} from "@prisma/client";
import {Prismapg} from "@prisma/client";

const adapter = new Prismapg({
    connectionString: process.env.DATABASE_URL 
});

export const prisma = new PrismaClient({
    adapter: adapter
});