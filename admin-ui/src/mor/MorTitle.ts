import { Mor as TMor } from "../api/mor/Mor";

export const MOR_TITLE_FIELD = "id";

export const MorTitle = (record: TMor): string => {
  return record.id || record.id;
};
