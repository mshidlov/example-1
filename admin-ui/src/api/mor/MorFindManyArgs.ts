import { MorWhereInput } from "./MorWhereInput";
import { MorOrderByInput } from "./MorOrderByInput";

export type MorFindManyArgs = {
  where?: MorWhereInput;
  orderBy?: MorOrderByInput;
  skip?: number;
  take?: number;
};
