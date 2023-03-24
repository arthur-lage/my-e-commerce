export const numberToCurrency = (value: number) => {
  let USDollars = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return USDollars.format(value);
};
