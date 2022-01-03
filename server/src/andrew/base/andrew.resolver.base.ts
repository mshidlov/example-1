import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DeleteAndrewArgs } from "./DeleteAndrewArgs";
import { AndrewFindManyArgs } from "./AndrewFindManyArgs";
import { AndrewFindUniqueArgs } from "./AndrewFindUniqueArgs";
import { Andrew } from "./Andrew";
import { AndrewService } from "../andrew.service";

@graphql.Resolver(() => Andrew)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AndrewResolverBase {
  constructor(
    protected readonly service: AndrewService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Andrew",
    action: "read",
    possession: "any",
  })
  async _andrewsMeta(
    @graphql.Args() args: AndrewFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Andrew])
  @nestAccessControl.UseRoles({
    resource: "Andrew",
    action: "read",
    possession: "any",
  })
  async andrews(
    @graphql.Args() args: AndrewFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Andrew[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Andrew",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Andrew, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Andrew",
    action: "read",
    possession: "own",
  })
  async andrew(
    @graphql.Args() args: AndrewFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Andrew | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Andrew",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Andrew)
  @nestAccessControl.UseRoles({
    resource: "Andrew",
    action: "delete",
    possession: "any",
  })
  async deleteAndrew(
    @graphql.Args() args: DeleteAndrewArgs
  ): Promise<Andrew | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
