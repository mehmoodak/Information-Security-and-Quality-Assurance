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
  kilometer: {
    name: 'kilometers',
    unit: 'km',
    convertName: 'miles',
    convertUnit: 'mi',
    convertRate: 0.62137273665,
  },
};

const ConvertService = {

  getUnit(input) {
    const regEx = new RegExp('[a-z]', 'i');
    const result = regEx.exec(input);

    if (result) {
      const unit = input.slice(result.index);

      if (!unit) return null;

      return converterList[unit.toLowerCase()] ? unit : null;
    }

    return null;
  },

  getNumber(input) {
    try {
      const regEx = new RegExp('[a-z]', 'i');
      const result = regEx.exec(input);
      let number = null;

      if (result) {
        number = input.slice(0, result.index);

        // eslint-disable-next-line no-eval
        return (number === '') ? 1 : eval(number);
      }

      if (input) {
        number = input.slice(0, input.length);
        // eslint-disable-next-line no-eval
        return (number === '') ? 1 : eval(number);
      }

      return null;
    } catch (e) {
      return null;
    }
  },

  convert(number, unit) {
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

    const returnNum = number * converterList[unit].convertRate;
    const returnUnit = converterList[unit].convertUnit;
    const string = `${number} ${unit} converts to ${Number.parseFloat(returnNum).toFixed(5)} ${returnUnit}`;

    return {
      initNum: number,
      initUnit: unit,
      returnNum,
      returnUnit,
      string,
    };
  },
};

module.exports = ConvertService;