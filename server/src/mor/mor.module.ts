import { Module } from "@nestjs/common";
import { MorModuleBase } from "./base/mor.module.base";
import { MorService } from "./mor.service";
import { MorController } from "./mor.controller";
import { MorResolver } from "./mor.resolver";

@Module({
  imports: [MorModuleBase],
  controllers: [MorController],
  providers: [MorService, MorResolver],
  exports: [MorService],
})
export class MorModule {}
