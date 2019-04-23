const converterList = {
  gal: {
    name: 'gallons',
    unit: 'gal',
    convertName: 'liters',
    convertUnit: 'L',
    convertRate: 3.78541,
  },
  l: {
    name: 'liters',
    unit: 'l',
    convertName: 'gallons',
    convertUnit: 'gal',
    convertRate: 0.26417217685,
  },
  lbs: {
    name: 'pounds',
    unit: 'lbs',
    convertName: 'kilograms',
    convertUnit: 'kg',
    convertRate: 0.453592,
  },
  kg: {
    name: 'kilograms',
    unit: 'kg',
    convertName: 'pounds',
    convertUnit: 'lbs',
    convertRate: 2.20462442018,
  },
  mi: {
    name: 'miles',
    unit: 'mi',
    convertName: 'kilometers',
    convertUnit: 'km',
    convertRate: 1.60934,
  },
  km: {
    name: 'kilometers',
    unit: 'km',
    convertName: 'miles',
    convertUnit: 'mi',
    convertRate: 0.62137273665,
  },
};

function ConvertService() {
  /**
   * Returns unit if it is available on our converterList.
   *
   * @param {string} input string that contains number and unit.
   *
   * @returns {string | null}
   */
  this.getUnit = (input) => {
    const regEx = new RegExp('[a-z]', 'i');
    const result = regEx.exec(input);

    if (result) {
      const unit = input.slice(result.index);

      if (!unit) return null;

      return converterList[unit.toLowerCase()] ? unit : null;
    }

    return null;
  };

  /**
   * Returns number from the string.
   *
   * @param {string} input string that contains number and unit.
   *
   * @returns {number | null} returns number if available, 1 if empty and null if invalid number
   */
  this.getNumber = (input) => {
    try {
      const regEx = new RegExp('[a-z]', 'i');
      const result = regEx.exec(input);
      let number = null;

      if (result) {
        number = input.slice(0, result.index);
      } else if (input) {
        number = input.slice(0, input.length);
      }

      const doubleSlashRegEx = new RegExp('[/].*[/]', 'g');
      const isDoubleSlash = doubleSlashRegEx.test(number);

      if (isDoubleSlash) {
        return null;
      }

      // eslint-disable-next-line no-eval
      return (number === '') ? 1 : eval(number);
    } catch (e) {
      return null;
    }
  };

  /**
   * Convert the given unit to another unit. Criteria is defined in convertList.
   *
   * @param {number} number number to convert
   * @param {string} unit unit to convert
   *
   * @returns {object} json response of the calculation
   */
  this.getReturnUnit = (unit) => {
    const returnUnit = converterList[unit.toLowerCase()].convertUnit;
    return returnUnit || null;
  };

  /**
   * Convert the given unit to another unit. Criteria is defined in convertList.
   *
   * @param {number} number number to convert
   * @param {string} unit unit to convert
   *
   * @returns {object} json response of the calculation
   */
  this.convert = (number, unit) => {
    if (!number || !unit) {
      let msg = '';

      if (!number && !unit) {
        msg = 'Invalid number and unit.';
      } else if (!unit) {
        msg = 'Invalid unit.';
      } else if (!number) {
        msg = 'Invalid number.';
      }

      return {
        success: false,
        data: {
          msg,
        },
      };
    }

    const returnNum = number * converterList[unit.toLowerCase()].convertRate;
    const returnUnit = this.getReturnUnit(unit);
    const string = `${number} ${unit} converts to ${Number.parseFloat(returnNum).toFixed(5)} ${returnUnit}`;

    return {
      success: true,
      data: {
        initNum: number,
        initUnit: unit,
        returnNum,
        returnUnit,
        string,
      },
    };
  };
}

module.exports = ConvertService;
