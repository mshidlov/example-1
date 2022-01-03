import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AndrewWhereInput } from "./AndrewWhereInput";
import { Type } from "class-transformer";
import { AndrewOrderByInput } from "./AndrewOrderByInput";

@ArgsType()
class AndrewFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AndrewWhereInput,
  })
  @Field(() => AndrewWhereInput, { nullable: true })
  @Type(() => AndrewWhereInput)
  where?: AndrewWhereInput;

  @ApiProperty({
    required: false,
    type: AndrewOrderByInput,
  })
  @Field(() => AndrewOrderByInput, { nullable: true })
  @Type(() => AndrewOrderByInput)
  orderBy?: AndrewOrderByInput;

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

export { AndrewFindManyArgs };
