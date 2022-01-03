import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SegalWhereInput } from "./SegalWhereInput";
import { Type } from "class-transformer";
import { SegalOrderByInput } from "./SegalOrderByInput";

@ArgsType()
class SegalFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SegalWhereInput,
  })
  @Field(() => SegalWhereInput, { nullable: true })
  @Type(() => SegalWhereInput)
  where?: SegalWhereInput;

  @ApiProperty({
    required: false,
    type: SegalOrderByInput,
  })
  @Field(() => SegalOrderByInput, { nullable: true })
  @Type(() => SegalOrderByInput)
  orderBy?: SegalOrderByInput;

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

export { SegalFindManyArgs };
