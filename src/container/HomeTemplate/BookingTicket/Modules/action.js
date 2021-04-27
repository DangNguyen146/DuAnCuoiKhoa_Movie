import { DAT_GHE, HUY_GHE } from "./constant";
export const DatGeAction = (ghe) => {
  return {
    type: DAT_GHE,
    ghe,
  };
};
export const huyGeAction = (maGhe) => {
  return {
    type: HUY_GHE,
    maGhe,
  };
};
