var jsf = require('json-schema-faker');
var mockDataSchema = require('../mockDataSchema');
var fs = require('fs');

var json = JSON.stringify(jsf(mockDataSchema),null, 2);

fs.writeFile("./src/api/db.json", json, (err) => {
  return err ? console.log(err) : console.log("Mock data generated");
});
