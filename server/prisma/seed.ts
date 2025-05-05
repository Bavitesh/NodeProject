import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('test1234', 10);

  await prisma.user.upsert({
    where: { email: 'demo@example.com' },
    update: {},
    create: {
      email: 'demo@example.com',
      name: 'Demo User',
      password,
      invoices: {
        create: [
          {
            vendor_name: 'Vendor A',
            amount: 500,
            due_date: new Date('2025-05-15'),
            description: 'Web Development Services',
            paid: false,
          },
          {
            vendor_name: 'Vendor B',
            amount: 750,
            due_date: new Date('2025-06-01'),
            description: 'Consulting Services',
            paid: true,
          },
          {
            vendor_name: 'Vendor C',
            amount: 1200,
            due_date: new Date('2025-07-10'),
            description: 'Marketing Campaign',
            paid: false,
          },
          {
            vendor_name: 'Vendor D',
            amount: 900,
            due_date: new Date('2025-08-01'),
            description: 'UX/UI Design Services',
            paid: true,
          },
          {
            vendor_name: 'Vendor E',
            amount: 400,
            due_date: new Date('2025-08-15'),
            description: 'Domain & Hosting Renewal',
            paid: false,
          },
        ],
      },
    },
  });
  const invoices = await prisma.invoice.findMany();
  console.log('Invoices seeded:', invoices);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
  });

