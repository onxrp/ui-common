export const average = (arr: number[]) =>
  arr.reduce((a, b) => a + b, 0) / (arr.length + 0.0);

export const getMaxOfArray = (numArray: number[]) => {
  return Math.max.apply(null, numArray);
};

const median = (arr: number[]) => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

export const formatNumber = (
  value: number | string,
  minDecimals?: number,
  maxDecimals?: number
) => {
  const formatter = Intl.NumberFormat("en-US", {
    style: "decimal",
    useGrouping: true,
    minimumFractionDigits: minDecimals !== null ? minDecimals : 2,
    maximumFractionDigits: maxDecimals !== null ? maxDecimals : 6,
  });
  return formatter.format(
    parseFloat((value || "0").toString().replaceAll(",", ""))
  );
};
