import { ArgsType, Field } from "@nestjs/graphql";
import { SegalWhereUniqueInput } from "./SegalWhereUniqueInput";

@ArgsType()
class DeleteSegalArgs {
  @Field(() => SegalWhereUniqueInput, { nullable: false })
  where!: SegalWhereUniqueInput;
}

export { DeleteSegalArgs };
