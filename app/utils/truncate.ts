export const truncate = (str: string, lettersNum: number) =>
  str?.length > lettersNum ? str?.slice(0, lettersNum - 1) + "…" : str;
