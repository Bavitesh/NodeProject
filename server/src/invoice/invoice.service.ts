import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InvoiceService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(userId: number) {
    return this.prisma.invoice.findMany({ where: { userId } });
  }

  async findOne(id: number, userId: number) {
    const invoice = await this.prisma.invoice.findFirst({ where: { id, userId } });
    if (!invoice) throw new NotFoundException('Invoice not found');
    return invoice;
  }
}