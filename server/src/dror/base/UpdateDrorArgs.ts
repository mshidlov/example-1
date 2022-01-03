import { ArgsType, Field } from "@nestjs/graphql";
import { DrorWhereUniqueInput } from "./DrorWhereUniqueInput";
import { DrorUpdateInput } from "./DrorUpdateInput";

@ArgsType()
class UpdateDrorArgs {
  @Field(() => DrorWhereUniqueInput, { nullable: false })
  where!: DrorWhereUniqueInput;
  @Field(() => DrorUpdateInput, { nullable: false })
  data!: DrorUpdateInput;
}

export { UpdateDrorArgs };
