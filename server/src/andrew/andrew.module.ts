import { Module } from "@nestjs/common";
import { AndrewModuleBase } from "./base/andrew.module.base";
import { AndrewService } from "./andrew.service";
import { AndrewController } from "./andrew.controller";
import { AndrewResolver } from "./andrew.resolver";

@Module({
  imports: [AndrewModuleBase],
  controllers: [AndrewController],
  providers: [AndrewService, AndrewResolver],
  exports: [AndrewService],
})
export class AndrewModule {}
