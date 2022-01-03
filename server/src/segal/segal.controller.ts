import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SegalService } from "./segal.service";
import { SegalControllerBase } from "./base/segal.controller.base";

@swagger.ApiTags("segals")
@common.Controller("segals")
export class SegalController extends SegalControllerBase {
  constructor(
    protected readonly service: SegalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
