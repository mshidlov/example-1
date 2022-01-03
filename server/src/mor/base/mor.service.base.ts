import { PrismaService } from "nestjs-prisma";
import { Prisma, Mor, Dror } from "@prisma/client";

export class MorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MorFindManyArgs>
  ): Promise<number> {
    return this.prisma.mor.count(args);
  }

  async findMany<T extends Prisma.MorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MorFindManyArgs>
  ): Promise<Mor[]> {
    return this.prisma.mor.findMany(args);
  }
  async findOne<T extends Prisma.MorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MorFindUniqueArgs>
  ): Promise<Mor | null> {
    return this.prisma.mor.findUnique(args);
  }
  async create<T extends Prisma.MorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MorCreateArgs>
  ): Promise<Mor> {
    return this.prisma.mor.create<T>(args);
  }
  async update<T extends Prisma.MorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MorUpdateArgs>
  ): Promise<Mor> {
    return this.prisma.mor.update<T>(args);
  }
  async delete<T extends Prisma.MorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MorDeleteArgs>
  ): Promise<Mor> {
    return this.prisma.mor.delete(args);
  }

  async getDror(parentId: string): Promise<Dror | null> {
    return this.prisma.mor
      .findUnique({
        where: { id: parentId },
      })
      .dror();
  }
}
