import { ArgsType, Field } from "@nestjs/graphql";
import { AndrewWhereUniqueInput } from "./AndrewWhereUniqueInput";

@ArgsType()
class AndrewFindUniqueArgs {
  @Field(() => AndrewWhereUniqueInput, { nullable: false })
  where!: AndrewWhereUniqueInput;
}

export { AndrewFindUniqueArgs };
