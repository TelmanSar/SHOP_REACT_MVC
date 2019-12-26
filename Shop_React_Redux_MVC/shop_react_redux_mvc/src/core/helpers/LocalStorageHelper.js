class LocalStorageHelper {
  static getItem(key) {
    try {
      return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null
    } catch ( e ) {
      throw new Error ('storage_element_not_found')
    }
  }

  static setItem(key, value) {
    localStorage.setItem(key,  JSON.stringify(value));
  }

  static deleteItem(key) {
    delete localStorage[key]
  }
}

export default LocalStorageHelper;

