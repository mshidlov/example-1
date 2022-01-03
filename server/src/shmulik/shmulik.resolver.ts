import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ShmulikResolverBase } from "./base/shmulik.resolver.base";
import { Shmulik } from "./base/Shmulik";
import { ShmulikService } from "./shmulik.service";

@graphql.Resolver(() => Shmulik)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ShmulikResolver extends ShmulikResolverBase {
  constructor(
    protected readonly service: ShmulikService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
