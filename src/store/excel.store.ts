import { atom } from "recoil";

export type ChoiceTablePattern = null | 'potm'

export const choiceTablePattern = atom<ChoiceTablePattern>({
  key: "choiceTablePattern",
  default: "potm",
});
