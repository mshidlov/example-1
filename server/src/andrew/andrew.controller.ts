import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AndrewService } from "./andrew.service";
import { AndrewControllerBase } from "./base/andrew.controller.base";

@swagger.ApiTags("andrews")
@common.Controller("andrews")
export class AndrewController extends AndrewControllerBase {
  constructor(
    protected readonly service: AndrewService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
