import { PrismaService } from "nestjs-prisma";
import { Prisma, Segal } from "@prisma/client";

export class SegalServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SegalFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SegalFindManyArgs>
  ): Promise<number> {
    return this.prisma.segal.count(args);
  }

  async findMany<T extends Prisma.SegalFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SegalFindManyArgs>
  ): Promise<Segal[]> {
    return this.prisma.segal.findMany(args);
  }
  async findOne<T extends Prisma.SegalFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SegalFindUniqueArgs>
  ): Promise<Segal | null> {
    return this.prisma.segal.findUnique(args);
  }
  async create<T extends Prisma.SegalCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SegalCreateArgs>
  ): Promise<Segal> {
    return this.prisma.segal.create<T>(args);
  }
  async update<T extends Prisma.SegalUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SegalUpdateArgs>
  ): Promise<Segal> {
    return this.prisma.segal.update<T>(args);
  }
  async delete<T extends Prisma.SegalDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SegalDeleteArgs>
  ): Promise<Segal> {
    return this.prisma.segal.delete(args);
  }
}
