import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DrorWhereInput } from "./DrorWhereInput";
import { Type } from "class-transformer";
import { DrorOrderByInput } from "./DrorOrderByInput";

@ArgsType()
class DrorFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DrorWhereInput,
  })
  @Field(() => DrorWhereInput, { nullable: true })
  @Type(() => DrorWhereInput)
  where?: DrorWhereInput;

  @ApiProperty({
    required: false,
    type: DrorOrderByInput,
  })
  @Field(() => DrorOrderByInput, { nullable: true })
  @Type(() => DrorOrderByInput)
  orderBy?: DrorOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DrorFindManyArgs };
