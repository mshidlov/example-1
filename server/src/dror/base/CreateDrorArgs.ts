import { ArgsType, Field } from "@nestjs/graphql";
import { DrorCreateInput } from "./DrorCreateInput";

@ArgsType()
class CreateDrorArgs {
  @Field(() => DrorCreateInput, { nullable: false })
  data!: DrorCreateInput;
}

export { CreateDrorArgs };
