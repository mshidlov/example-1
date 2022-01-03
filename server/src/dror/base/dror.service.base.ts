import { PrismaService } from "nestjs-prisma";
import { Prisma, Dror, Mor } from "@prisma/client";

export class DrorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DrorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrorFindManyArgs>
  ): Promise<number> {
    return this.prisma.dror.count(args);
  }

  async findMany<T extends Prisma.DrorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrorFindManyArgs>
  ): Promise<Dror[]> {
    return this.prisma.dror.findMany(args);
  }
  async findOne<T extends Prisma.DrorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrorFindUniqueArgs>
  ): Promise<Dror | null> {
    return this.prisma.dror.findUnique(args);
  }
  async create<T extends Prisma.DrorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrorCreateArgs>
  ): Promise<Dror> {
    return this.prisma.dror.create<T>(args);
  }
  async update<T extends Prisma.DrorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrorUpdateArgs>
  ): Promise<Dror> {
    return this.prisma.dror.update<T>(args);
  }
  async delete<T extends Prisma.DrorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrorDeleteArgs>
  ): Promise<Dror> {
    return this.prisma.dror.delete(args);
  }

  async findMors(
    parentId: string,
    args: Prisma.MorFindManyArgs
  ): Promise<Mor[]> {
    return this.prisma.dror
      .findUnique({
        where: { id: parentId },
      })
      .mors(args);
  }
}
