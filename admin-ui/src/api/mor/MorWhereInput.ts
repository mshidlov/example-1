import { DrorWhereUniqueInput } from "../dror/DrorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type MorWhereInput = {
  dror?: DrorWhereUniqueInput;
  id?: StringFilter;
};
