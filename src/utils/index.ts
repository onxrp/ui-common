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
  minDecimals = 2,
  maxDecimals = 6,
  isXRP: boolean = false
) => {
  const formatter = Intl.NumberFormat("en-US", {
    style: "decimal",
    useGrouping: true,
    minimumFractionDigits: minDecimals,
    maximumFractionDigits: maxDecimals,
  });

  const _value = value
    ? isXRP
      ? parseFloat(value.toString().replaceAll(",", "")) / 1_000_000
      : parseFloat(value.toString().replaceAll(",", ""))
    : 0;

  return formatter.format(_value);
};
