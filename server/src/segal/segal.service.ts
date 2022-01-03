import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SegalServiceBase } from "./base/segal.service.base";

@Injectable()
export class SegalService extends SegalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
