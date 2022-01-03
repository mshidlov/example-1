import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ShmulikServiceBase } from "./base/shmulik.service.base";

@Injectable()
export class ShmulikService extends ShmulikServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
