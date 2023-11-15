const API_URL_LOCAL = 'localhost:8080'; // DHIS2 local instance
export const API_BASE_URL: string =
  process.env.REACT_APP_API_BASE_URL || API_URL_LOCAL;
export const API_VERSION: number =
  Number(process.env.REACT_APP_API_VERSION) || 38;
