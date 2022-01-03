import { ArgsType, Field } from "@nestjs/graphql";
import { AndrewWhereUniqueInput } from "./AndrewWhereUniqueInput";

@ArgsType()
class DeleteAndrewArgs {
  @Field(() => AndrewWhereUniqueInput, { nullable: false })
  where!: AndrewWhereUniqueInput;
}

export { DeleteAndrewArgs };
