import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DrorWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
