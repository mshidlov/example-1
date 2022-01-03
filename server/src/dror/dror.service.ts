import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DrorServiceBase } from "./base/dror.service.base";

@Injectable()
export class DrorService extends DrorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
