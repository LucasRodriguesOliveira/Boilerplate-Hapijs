/**
 * @public
 * @abstract
 * @static
 * @class
 * @description
 * Utility Class
 */
class Util {
  /**
   * @public
   * @static
   * @method
   * @param {any} val Any value that wants to search in <em><ins>arr</ins></em>
   * @param {array} arr Vector containing all values for which the search will be performed
   * @returns {Boolean}
   * @description
   * Checks the existence of <em><ins>val</ins></em> in vector <em><ins>arr</ins></em>
   * and returns a <strong>Boolean<sup>true|false</sup></strong>
   */
  static isin(val, arr) {
    return !!arr.find(a => Util.check(a, val));
  }

  /**
   * @public
   * @static
   * @method
   * @param {any} val Any value that wants to search in <em><ins>arr</ins></em>
   * @param {array} arr Vector containing all values for which the search will be performed
   * @returns {Boolean}
   * @description
   * Checks for <strong>No</strong> existence of <em><ins>val</ins></em> in vector <em><ins>arr</ins></em>
   * and returns a <strong>Boolean<sup>true|false</sup></strong>
   */
  static notin(val, arr) {
    return !Util.isin(val, arr);
  }

  /**
   * @public
   * @static
   * @method
   * @param {object} obj Object to be converted
   * @returns {array}
   * @description
   * return all the properties, methods and functions of
   * <em><ins>obj</ins></em> in a vector
   */
  static obj2arr(obj) {
    return Object.getOwnPropertyNames(obj).map(prop => obj[prop]);
  }

  /**
   * @public
   * @static
   * @method
   * @param {any} v1 Any value to compare
   * @param {any} v2 Any value to compare
   * @returns {Boolean}
   * @description
   * Compare if <em><ins>v1</ins></em>
   * is equal to <em><ins>v2</ins></em>
   */
  static check(v1, v2) {
    return Object.is(v1, v2);
  }

  static Ok(data = {}, message = 'OK') {
    return {
      statusCode: 200,
      message,
      data
    };
  }
}

module.exports = Util;