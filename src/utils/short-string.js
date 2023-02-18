export const getShortedString = (string = "") => {
  try {
    return string.slice(0, 4) + "..." + string.slice(-4);
  } catch {
    return "0x00";
  }
};
