import { ArgsType, Field } from "@nestjs/graphql";
import { MorCreateInput } from "./MorCreateInput";

@ArgsType()
class CreateMorArgs {
  @Field(() => MorCreateInput, { nullable: false })
  data!: MorCreateInput;
}

export { CreateMorArgs };
