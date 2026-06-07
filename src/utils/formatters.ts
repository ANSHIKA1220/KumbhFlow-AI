export const formatNumber = (value: number) => Math.round(value).toLocaleString("en-IN");
export const formatPercent = (value: number) => `${Math.round(value)}%`;
export const formatMinutes = (value: number) => `${Math.round(value)} min`;
