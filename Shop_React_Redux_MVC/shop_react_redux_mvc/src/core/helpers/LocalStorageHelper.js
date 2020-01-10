class LocalStorageHelper {
  static getItem(key) {
      return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null
    }

  static setItem(key, value) {
    localStorage.setItem(key,  JSON.stringify(value));
  }

  static deleteItem(key) {
    delete localStorage[key]
  }
}

export default LocalStorageHelper;