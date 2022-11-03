// Currency formatter
export const currency = (amount: number): string => {
  const formatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  });
  return formatter.format(amount);
};
