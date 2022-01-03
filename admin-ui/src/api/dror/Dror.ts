import { Mor } from "../mor/Mor";

export type Dror = {
  createdAt: Date;
  date: Date | null;
  id: string;
  mors?: Array<Mor>;
  name: string | null;
  updatedAt: Date;
};
