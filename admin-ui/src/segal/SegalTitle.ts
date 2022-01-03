import { Segal as TSegal } from "../api/segal/Segal";

export const SEGAL_TITLE_FIELD = "id";

export const SegalTitle = (record: TSegal): string => {
  return record.id || record.id;
};
