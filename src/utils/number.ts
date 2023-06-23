import { THOUSAND, TEN_THOUSAND } from "../constants/numbers";

export const formatNumber = (num?: number): string | number => {
  if (num === undefined) {
    return "-";
  }

  if (num >= THOUSAND && num < TEN_THOUSAND) {
    return parseInt(`${num / THOUSAND}`).toFixed(1) + "k";
  }

  if (num >= TEN_THOUSAND) {
    return parseInt(`${num / TEN_THOUSAND}`).toFixed(1) + "w";
  }

  return num;
};
