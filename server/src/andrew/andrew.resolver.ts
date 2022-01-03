import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AndrewResolverBase } from "./base/andrew.resolver.base";
import { Andrew } from "./base/Andrew";
import { AndrewService } from "./andrew.service";

@graphql.Resolver(() => Andrew)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AndrewResolver extends AndrewResolverBase {
  constructor(
    protected readonly service: AndrewService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
