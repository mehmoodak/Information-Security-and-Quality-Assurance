# Metric Imperial Converter

This is a simple converter which contains api and simple frontend when server is running. Frontend of the site makes an ajax request to api and shows returned data.

`npm install`

`npm start`

Configurations of the project can be changed with `.env` and `config.js` file

- `env` file defines environment and port.
- `config.js` file contain different configurations depending on environment.

## Examples

### Usage

`/api/convert?input=4gal`

`/api/convert?input=1/2km`

`/api/convert?input=5.4/3lbs`

`/api/convert?input=kg`

### Output

`{ initNum: 3.1, initUnit: 'mi', returnNum: 5.0000008, returnUnit: 'km', string: '3.1 miles converts to 5.00002 kilometers' }`
