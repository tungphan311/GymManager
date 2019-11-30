export function getToken(key) {
  return localStorage.getItem(key);
}
export function buildErr(errCode, params = {}) {
  return {
    errCode,
    ...params
  };
}
