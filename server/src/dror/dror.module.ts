import { Module } from "@nestjs/common";
import { DrorModuleBase } from "./base/dror.module.base";
import { DrorService } from "./dror.service";
import { DrorController } from "./dror.controller";
import { DrorResolver } from "./dror.resolver";

@Module({
  imports: [DrorModuleBase],
  controllers: [DrorController],
  providers: [DrorService, DrorResolver],
  exports: [DrorService],
})
export class DrorModule {}
