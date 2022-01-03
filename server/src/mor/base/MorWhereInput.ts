import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DrorWhereUniqueInput } from "../../dror/base/DrorWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
@InputType()
class MorWhereInput {
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
  dror?: DrorWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;
}
export { MorWhereInput };
