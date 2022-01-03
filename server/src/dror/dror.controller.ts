import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DrorService } from "./dror.service";
import { DrorControllerBase } from "./base/dror.controller.base";

@swagger.ApiTags("drors")
@common.Controller("drors")
export class DrorController extends DrorControllerBase {
  constructor(
    protected readonly service: DrorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
