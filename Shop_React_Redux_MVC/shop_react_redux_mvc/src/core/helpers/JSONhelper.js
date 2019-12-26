/**
 * @name JSONHelper
 * @desc this is a JSONHelper class
 * this class is a helper for json parsing
 */
class JSONHelper {


  // -- Logic -- //

  /**
   * @name stringify
   * @desc this method handles stringify of object
   * @param data
   * @returns {string}
   */
  static stringify(data) {
    try {
      return JSON.stringify(data);
    } catch(err) {
      throw new Error(err);
    }
  }

  /**
   * @name parse
   * @desc this method handles parse of object
   * @param data
   * @returns {Object}
   */
  static parse(data) {
    try {
      return JSON.parse(data);
    } catch(err) {
      alert("PLEASE TRY LATER");
    }
  }
}

export default JSONHelper;