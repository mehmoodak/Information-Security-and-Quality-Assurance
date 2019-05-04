# Issue Tracker

This is a simple issue tracker project which contains api and simple frontend when server is running. Frontend of the site makes ajax requests to api and shows returned data.

`npm install`

`npm start`

Configurations of the project can be changed with `.env` and `config.js` file

- `env` file defines environment and port.
- `config.js` file contain different configurations depending on environment.

## Examples

### Usage

`/api/issues/{project}`

`/api/issues/{project}?open=true&assigned_to=Joe`

### Output

`[{"_id":"5871dda29faedc3491ff93bb","issue_title":"Fix error in posting data","issue_text":"When we post data it has an error.","created_on":"2017-01-08T06:35:14.240Z","updated_on":"2017-01-08T06:35:14.240Z","created_by":"Joe","assigned_to":"Joe","open":true,"status_text":"In QA"},...]`
