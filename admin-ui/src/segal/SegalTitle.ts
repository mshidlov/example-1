import { Segal as TSegal } from "../api/segal/Segal";

export const SEGAL_TITLE_FIELD = "shumlik";

export const SegalTitle = (record: TSegal): string => {
  return record.shumlik || record.id;
};
