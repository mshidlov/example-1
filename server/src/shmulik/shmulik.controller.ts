import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ShmulikService } from "./shmulik.service";
import { ShmulikControllerBase } from "./base/shmulik.controller.base";

@swagger.ApiTags("shmuliks")
@common.Controller("shmuliks")
export class ShmulikController extends ShmulikControllerBase {
  constructor(
    protected readonly service: ShmulikService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
