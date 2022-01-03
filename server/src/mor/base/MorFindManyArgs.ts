import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MorWhereInput } from "./MorWhereInput";
import { Type } from "class-transformer";
import { MorOrderByInput } from "./MorOrderByInput";

@ArgsType()
class MorFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MorWhereInput,
  })
  @Field(() => MorWhereInput, { nullable: true })
  @Type(() => MorWhereInput)
  where?: MorWhereInput;

  @ApiProperty({
    required: false,
    type: MorOrderByInput,
  })
  @Field(() => MorOrderByInput, { nullable: true })
  @Type(() => MorOrderByInput)
  orderBy?: MorOrderByInput;

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

export { MorFindManyArgs };
