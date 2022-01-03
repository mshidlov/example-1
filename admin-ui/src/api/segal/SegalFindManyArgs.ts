import { SegalWhereInput } from "./SegalWhereInput";
import { SegalOrderByInput } from "./SegalOrderByInput";

export type SegalFindManyArgs = {
  where?: SegalWhereInput;
  orderBy?: SegalOrderByInput;
  skip?: number;
  take?: number;
};
