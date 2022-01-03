import { ArgsType, Field } from "@nestjs/graphql";
import { ShmulikWhereUniqueInput } from "./ShmulikWhereUniqueInput";

@ArgsType()
class ShmulikFindUniqueArgs {
  @Field(() => ShmulikWhereUniqueInput, { nullable: false })
  where!: ShmulikWhereUniqueInput;
}

export { ShmulikFindUniqueArgs };
