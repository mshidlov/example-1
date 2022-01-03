import { ArgsType, Field } from "@nestjs/graphql";
import { DrorWhereUniqueInput } from "./DrorWhereUniqueInput";

@ArgsType()
class DeleteDrorArgs {
  @Field(() => DrorWhereUniqueInput, { nullable: false })
  where!: DrorWhereUniqueInput;
}

export { DeleteDrorArgs };
