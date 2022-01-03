import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DrorWhereUniqueInput } from "../../dror/base/DrorWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class MorCreateInput {
  @ApiProperty({
    required: false,
    type: () => DrorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DrorWhereUniqueInput)
  @IsOptional()
  @Field(() => DrorWhereUniqueInput, {
    nullable: true,
  })
  dror?: DrorWhereUniqueInput | null;
}
export { MorCreateInput };
