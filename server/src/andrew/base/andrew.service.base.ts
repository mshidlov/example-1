import { PrismaService } from "nestjs-prisma";
import { Prisma, Andrew } from "@prisma/client";

export class AndrewServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AndrewFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AndrewFindManyArgs>
  ): Promise<number> {
    return this.prisma.andrew.count(args);
  }

  async findMany<T extends Prisma.AndrewFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AndrewFindManyArgs>
  ): Promise<Andrew[]> {
    return this.prisma.andrew.findMany(args);
  }
  async findOne<T extends Prisma.AndrewFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AndrewFindUniqueArgs>
  ): Promise<Andrew | null> {
    return this.prisma.andrew.findUnique(args);
  }
  async create<T extends Prisma.AndrewCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AndrewCreateArgs>
  ): Promise<Andrew> {
    return this.prisma.andrew.create<T>(args);
  }
  async update<T extends Prisma.AndrewUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AndrewUpdateArgs>
  ): Promise<Andrew> {
    return this.prisma.andrew.update<T>(args);
  }
  async delete<T extends Prisma.AndrewDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AndrewDeleteArgs>
  ): Promise<Andrew> {
    return this.prisma.andrew.delete(args);
  }
}
