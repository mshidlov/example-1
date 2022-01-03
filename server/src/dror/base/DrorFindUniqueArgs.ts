import { ArgsType, Field } from "@nestjs/graphql";
import { DrorWhereUniqueInput } from "./DrorWhereUniqueInput";

@ArgsType()
class DrorFindUniqueArgs {
  @Field(() => DrorWhereUniqueInput, { nullable: false })
  where!: DrorWhereUniqueInput;
}

export { DrorFindUniqueArgs };
