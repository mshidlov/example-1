import { Dror } from "../dror/Dror";

export type Mor = {
  createdAt: Date;
  dror?: Dror | null;
  id: string;
  updatedAt: Date;
};
