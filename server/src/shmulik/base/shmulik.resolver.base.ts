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
import { DeleteShmulikArgs } from "./DeleteShmulikArgs";
import { ShmulikFindManyArgs } from "./ShmulikFindManyArgs";
import { ShmulikFindUniqueArgs } from "./ShmulikFindUniqueArgs";
import { Shmulik } from "./Shmulik";
import { ShmulikService } from "../shmulik.service";

@graphql.Resolver(() => Shmulik)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ShmulikResolverBase {
  constructor(
    protected readonly service: ShmulikService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Shmulik",
    action: "read",
    possession: "any",
  })
  async _shmuliksMeta(
    @graphql.Args() args: ShmulikFindManyArgs
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

  @graphql.Query(() => [Shmulik])
  @nestAccessControl.UseRoles({
    resource: "Shmulik",
    action: "read",
    possession: "any",
  })
  async shmuliks(
    @graphql.Args() args: ShmulikFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Shmulik[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Shmulik",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Shmulik, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Shmulik",
    action: "read",
    possession: "own",
  })
  async shmulik(
    @graphql.Args() args: ShmulikFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Shmulik | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Shmulik",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Shmulik)
  @nestAccessControl.UseRoles({
    resource: "Shmulik",
    action: "delete",
    possession: "any",
  })
  async deleteShmulik(
    @graphql.Args() args: DeleteShmulikArgs
  ): Promise<Shmulik | null> {
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
