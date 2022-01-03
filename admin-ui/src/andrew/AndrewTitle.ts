import { Andrew as TAndrew } from "../api/andrew/Andrew";

export const ANDREW_TITLE_FIELD = "id";

export const AndrewTitle = (record: TAndrew): string => {
  return record.id || record.id;
};
