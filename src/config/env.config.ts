// Central environment configuration
// All env vars are accessed through here — never import.meta.env directly in components

export const envConfig = {
  // apiBaseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
  apiBaseUrl: "https://corridor-daylight-skating.ngrok-free.dev",
  apiTimeout: Number(import.meta.env.VITE_API_TIMEOUT) || 10000,
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
};
