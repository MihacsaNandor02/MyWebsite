export function t(dictionary: any, path: string) {
  return path.split('.').reduce((obj, key) => obj?.[key], dictionary) || path;
}
