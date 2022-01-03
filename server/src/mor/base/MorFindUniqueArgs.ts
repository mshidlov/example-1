import { ArgsType, Field } from "@nestjs/graphql";
import { MorWhereUniqueInput } from "./MorWhereUniqueInput";

@ArgsType()
class MorFindUniqueArgs {
  @Field(() => MorWhereUniqueInput, { nullable: false })
  where!: MorWhereUniqueInput;
}

export { MorFindUniqueArgs };
