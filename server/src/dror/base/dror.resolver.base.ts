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
import { CreateDrorArgs } from "./CreateDrorArgs";
import { UpdateDrorArgs } from "./UpdateDrorArgs";
import { DeleteDrorArgs } from "./DeleteDrorArgs";
import { DrorFindManyArgs } from "./DrorFindManyArgs";
import { DrorFindUniqueArgs } from "./DrorFindUniqueArgs";
import { Dror } from "./Dror";
import { MorFindManyArgs } from "../../mor/base/MorFindManyArgs";
import { Mor } from "../../mor/base/Mor";
import { DrorService } from "../dror.service";

@graphql.Resolver(() => Dror)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DrorResolverBase {
  constructor(
    protected readonly service: DrorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Dror",
    action: "read",
    possession: "any",
  })
  async _drorsMeta(
    @graphql.Args() args: DrorFindManyArgs
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

  @graphql.Query(() => [Dror])
  @nestAccessControl.UseRoles({
    resource: "Dror",
    action: "read",
    possession: "any",
  })
  async drors(
    @graphql.Args() args: DrorFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Dror[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Dror",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Dror, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Dror",
    action: "read",
    possession: "own",
  })
  async dror(
    @graphql.Args() args: DrorFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Dror | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Dror",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Dror)
  @nestAccessControl.UseRoles({
    resource: "Dror",
    action: "create",
    possession: "any",
  })
  async createDror(
    @graphql.Args() args: CreateDrorArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Dror> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Dror",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Dror"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Dror)
  @nestAccessControl.UseRoles({
    resource: "Dror",
    action: "update",
    possession: "any",
  })
  async updateDror(
    @graphql.Args() args: UpdateDrorArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Dror | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Dror",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Dror"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Dror)
  @nestAccessControl.UseRoles({
    resource: "Dror",
    action: "delete",
    possession: "any",
  })
  async deleteDror(@graphql.Args() args: DeleteDrorArgs): Promise<Dror | null> {
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

  @graphql.ResolveField(() => [Mor])
  @nestAccessControl.UseRoles({
    resource: "Dror",
    action: "read",
    possession: "any",
  })
  async mors(
    @graphql.Parent() parent: Dror,
    @graphql.Args() args: MorFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Mor[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Mor",
    });
    const results = await this.service.findMors(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
