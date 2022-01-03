import { PrismaService } from "nestjs-prisma";
import { Prisma, Shmulik } from "@prisma/client";

export class ShmulikServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ShmulikFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShmulikFindManyArgs>
  ): Promise<number> {
    return this.prisma.shmulik.count(args);
  }

  async findMany<T extends Prisma.ShmulikFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShmulikFindManyArgs>
  ): Promise<Shmulik[]> {
    return this.prisma.shmulik.findMany(args);
  }
  async findOne<T extends Prisma.ShmulikFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShmulikFindUniqueArgs>
  ): Promise<Shmulik | null> {
    return this.prisma.shmulik.findUnique(args);
  }
  async create<T extends Prisma.ShmulikCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShmulikCreateArgs>
  ): Promise<Shmulik> {
    return this.prisma.shmulik.create<T>(args);
  }
  async update<T extends Prisma.ShmulikUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShmulikUpdateArgs>
  ): Promise<Shmulik> {
    return this.prisma.shmulik.update<T>(args);
  }
  async delete<T extends Prisma.ShmulikDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShmulikDeleteArgs>
  ): Promise<Shmulik> {
    return this.prisma.shmulik.delete(args);
  }
}
