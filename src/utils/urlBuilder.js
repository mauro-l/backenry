export const buildUrl = (baseUrl, params) => {
  const query = Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
    )
    .join("&");
  return `${baseUrl}?${query}`;
};
