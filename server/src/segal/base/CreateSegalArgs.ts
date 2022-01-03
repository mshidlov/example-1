import { ArgsType, Field } from "@nestjs/graphql";
import { SegalCreateInput } from "./SegalCreateInput";

@ArgsType()
class CreateSegalArgs {
  @Field(() => SegalCreateInput, { nullable: false })
  data!: SegalCreateInput;
}

export { CreateSegalArgs };
