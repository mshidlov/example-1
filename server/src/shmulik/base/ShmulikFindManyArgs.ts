import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ShmulikWhereInput } from "./ShmulikWhereInput";
import { Type } from "class-transformer";
import { ShmulikOrderByInput } from "./ShmulikOrderByInput";

@ArgsType()
class ShmulikFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ShmulikWhereInput,
  })
  @Field(() => ShmulikWhereInput, { nullable: true })
  @Type(() => ShmulikWhereInput)
  where?: ShmulikWhereInput;

  @ApiProperty({
    required: false,
    type: ShmulikOrderByInput,
  })
  @Field(() => ShmulikOrderByInput, { nullable: true })
  @Type(() => ShmulikOrderByInput)
  orderBy?: ShmulikOrderByInput;

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

export { ShmulikFindManyArgs };
