import { Shmulik as TShmulik } from "../api/shmulik/Shmulik";

export const SHMULIK_TITLE_FIELD = "id";

export const ShmulikTitle = (record: TShmulik): string => {
  return record.id || record.id;
};
