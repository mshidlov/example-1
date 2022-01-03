import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MorService } from "./mor.service";
import { MorControllerBase } from "./base/mor.controller.base";

@swagger.ApiTags("mors")
@common.Controller("mors")
export class MorController extends MorControllerBase {
  constructor(
    protected readonly service: MorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
