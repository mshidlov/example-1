import { ArgsType, Field } from "@nestjs/graphql";
import { SegalWhereUniqueInput } from "./SegalWhereUniqueInput";

@ArgsType()
class SegalFindUniqueArgs {
  @Field(() => SegalWhereUniqueInput, { nullable: false })
  where!: SegalWhereUniqueInput;
}

export { SegalFindUniqueArgs };
