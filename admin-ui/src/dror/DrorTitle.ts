import { Dror as TDror } from "../api/dror/Dror";

export const DROR_TITLE_FIELD = "name";

export const DrorTitle = (record: TDror): string => {
  return record.name || record.id;
};
