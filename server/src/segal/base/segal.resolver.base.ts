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
import { CreateSegalArgs } from "./CreateSegalArgs";
import { UpdateSegalArgs } from "./UpdateSegalArgs";
import { DeleteSegalArgs } from "./DeleteSegalArgs";
import { SegalFindManyArgs } from "./SegalFindManyArgs";
import { SegalFindUniqueArgs } from "./SegalFindUniqueArgs";
import { Segal } from "./Segal";
import { SegalService } from "../segal.service";

@graphql.Resolver(() => Segal)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SegalResolverBase {
  constructor(
    protected readonly service: SegalService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Segal",
    action: "read",
    possession: "any",
  })
  async _segalsMeta(
    @graphql.Args() args: SegalFindManyArgs
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

  @graphql.Query(() => [Segal])
  @nestAccessControl.UseRoles({
    resource: "Segal",
    action: "read",
    possession: "any",
  })
  async segals(
    @graphql.Args() args: SegalFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Segal[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Segal",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Segal, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Segal",
    action: "read",
    possession: "own",
  })
  async segal(
    @graphql.Args() args: SegalFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Segal | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Segal",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Segal)
  @nestAccessControl.UseRoles({
    resource: "Segal",
    action: "create",
    possession: "any",
  })
  async createSegal(
    @graphql.Args() args: CreateSegalArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Segal> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Segal",
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
        `providing the properties: ${properties} on ${"Segal"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Segal)
  @nestAccessControl.UseRoles({
    resource: "Segal",
    action: "update",
    possession: "any",
  })
  async updateSegal(
    @graphql.Args() args: UpdateSegalArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Segal | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Segal",
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
        `providing the properties: ${properties} on ${"Segal"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => Segal)
  @nestAccessControl.UseRoles({
    resource: "Segal",
    action: "delete",
    possession: "any",
  })
  async deleteSegal(
    @graphql.Args() args: DeleteSegalArgs
  ): Promise<Segal | null> {
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
