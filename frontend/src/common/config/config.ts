const envConfig = ((envs: ImportMetaEnv) => envs)(import.meta.env);

export default {
  baseUrl: envConfig.VITE_APP_BASE_URL,
  prefix: envConfig.VITE_APP_BASE_PREFIX
};
