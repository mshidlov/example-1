import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AndrewServiceBase } from "./base/andrew.service.base";

@Injectable()
export class AndrewService extends AndrewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
