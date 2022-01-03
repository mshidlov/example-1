import { ArgsType, Field } from "@nestjs/graphql";
import { ShmulikWhereUniqueInput } from "./ShmulikWhereUniqueInput";

@ArgsType()
class DeleteShmulikArgs {
  @Field(() => ShmulikWhereUniqueInput, { nullable: false })
  where!: ShmulikWhereUniqueInput;
}

export { DeleteShmulikArgs };
