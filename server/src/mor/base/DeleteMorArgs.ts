import { ArgsType, Field } from "@nestjs/graphql";
import { MorWhereUniqueInput } from "./MorWhereUniqueInput";

@ArgsType()
class DeleteMorArgs {
  @Field(() => MorWhereUniqueInput, { nullable: false })
  where!: MorWhereUniqueInput;
}

export { DeleteMorArgs };
