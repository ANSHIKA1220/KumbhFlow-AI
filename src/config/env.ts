export const env = {
  appName: import.meta.env.VITE_APP_NAME || "KumbhFlow AI",
  demoMode: import.meta.env.VITE_DEMO_MODE !== "false",
  dataSource: import.meta.env.VITE_DATA_SOURCE || "synthetic"
};
