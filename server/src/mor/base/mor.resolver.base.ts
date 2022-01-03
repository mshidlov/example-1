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
import { CreateMorArgs } from "./CreateMorArgs";
import { UpdateMorArgs } from "./UpdateMorArgs";
import { DeleteMorArgs } from "./DeleteMorArgs";
import { MorFindManyArgs } from "./MorFindManyArgs";
import { MorFindUniqueArgs } from "./MorFindUniqueArgs";
import { Mor } from "./Mor";
import { Dror } from "../../dror/base/Dror";
import { MorService } from "../mor.service";

@graphql.Resolver(() => Mor)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MorResolverBase {
  constructor(
    protected readonly service: MorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Mor",
    action: "read",
    possession: "any",
  })
  async _morsMeta(
    @graphql.Args() args: MorFindManyArgs
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

  @graphql.Query(() => [Mor])
  @nestAccessControl.UseRoles({
    resource: "Mor",
    action: "read",
    possession: "any",
  })
  async mors(
    @graphql.Args() args: MorFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Mor[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Mor",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Mor, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Mor",
    action: "read",
    possession: "own",
  })
  async mor(
    @graphql.Args() args: MorFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Mor | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Mor",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Mor)
  @nestAccessControl.UseRoles({
    resource: "Mor",
    action: "create",
    possession: "any",
  })
  async createMor(
    @graphql.Args() args: CreateMorArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Mor> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Mor",
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
        `providing the properties: ${properties} on ${"Mor"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        dror: args.data.dror
          ? {
              connect: args.data.dror,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Mor)
  @nestAccessControl.UseRoles({
    resource: "Mor",
    action: "update",
    possession: "any",
  })
  async updateMor(
    @graphql.Args() args: UpdateMorArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Mor | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Mor",
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
        `providing the properties: ${properties} on ${"Mor"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          dror: args.data.dror
            ? {
                connect: args.data.dror,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Mor)
  @nestAccessControl.UseRoles({
    resource: "Mor",
    action: "delete",
    possession: "any",
  })
  async deleteMor(@graphql.Args() args: DeleteMorArgs): Promise<Mor | null> {
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

  @graphql.ResolveField(() => Dror, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Mor",
    action: "read",
    possession: "any",
  })
  async dror(
    @graphql.Parent() parent: Mor,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Dror | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Dror",
    });
    const result = await this.service.getDror(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
