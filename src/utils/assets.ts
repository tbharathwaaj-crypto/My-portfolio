export function assetUrl(path: string) {
  if (/^(?:data:|https?:|blob:)/i.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}
