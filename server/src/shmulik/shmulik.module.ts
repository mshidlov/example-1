import { Module } from "@nestjs/common";
import { ShmulikModuleBase } from "./base/shmulik.module.base";
import { ShmulikService } from "./shmulik.service";
import { ShmulikController } from "./shmulik.controller";
import { ShmulikResolver } from "./shmulik.resolver";

@Module({
  imports: [ShmulikModuleBase],
  controllers: [ShmulikController],
  providers: [ShmulikService, ShmulikResolver],
  exports: [ShmulikService],
})
export class ShmulikModule {}
