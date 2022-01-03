import { Module } from "@nestjs/common";
import { SegalModuleBase } from "./base/segal.module.base";
import { SegalService } from "./segal.service";
import { SegalController } from "./segal.controller";
import { SegalResolver } from "./segal.resolver";

@Module({
  imports: [SegalModuleBase],
  controllers: [SegalController],
  providers: [SegalService, SegalResolver],
  exports: [SegalService],
})
export class SegalModule {}
