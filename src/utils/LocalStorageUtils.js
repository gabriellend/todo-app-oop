export class LocalStorageUtils {
  static get = (key) => localStorage.getItem(key);

  static set = (key, value) => localStorage.setItem(key, value);

  static clear = () => localStorage.clear();
}
