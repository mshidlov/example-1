import { ArgsType, Field } from "@nestjs/graphql";
import { MorWhereUniqueInput } from "./MorWhereUniqueInput";
import { MorUpdateInput } from "./MorUpdateInput";

@ArgsType()
class UpdateMorArgs {
  @Field(() => MorWhereUniqueInput, { nullable: false })
  where!: MorWhereUniqueInput;
  @Field(() => MorUpdateInput, { nullable: false })
  data!: MorUpdateInput;
}

export { UpdateMorArgs };
