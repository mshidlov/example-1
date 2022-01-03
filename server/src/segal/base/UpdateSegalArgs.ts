import { ArgsType, Field } from "@nestjs/graphql";
import { SegalWhereUniqueInput } from "./SegalWhereUniqueInput";
import { SegalUpdateInput } from "./SegalUpdateInput";

@ArgsType()
class UpdateSegalArgs {
  @Field(() => SegalWhereUniqueInput, { nullable: false })
  where!: SegalWhereUniqueInput;
  @Field(() => SegalUpdateInput, { nullable: false })
  data!: SegalUpdateInput;
}

export { UpdateSegalArgs };
