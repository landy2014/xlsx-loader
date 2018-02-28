#!usr/bin/env node

let xlsx = require('node-xlsx');
let fs = require('fs');

module.exports = function () {
  this.cacheable && this.cacheable();

  // parse execl to json
  var fileContent = xlsx.parse(this.resourcePath);

  // fetch first row
  var firstRow = fileContent[0].data[0];

  // fetch list
  var tempDataList = fileContent[0].data;

  var tempArr = [],
    tempString = '';
  for (var i = 1, len = tempDataList.length; i < len; i++) {
    tempString += "{";
    if (tempDataList[i].length == 0) continue;
    for (var j = 0; j < tempDataList[i].length; j++) {
      var tempStr = tempDataList[i][j];
      var replaceStr = "";
      if (typeof tempStr == "string") {
        replaceStr = tempStr.replace(/(\n)+|(\r\n)+/g, "");
      } else {
        replaceStr = tempStr;
      }

      if (j == tempDataList[i].length - 1) {
        tempString += "\"" + firstRow[j] + "\"" + " : \"" + replaceStr + "\""
      } else {
        tempString += "\"" + firstRow[j] + "\"" + " : \"" + replaceStr + "\","
      }

    }
    tempString += "}";
    tempArr.push(tempString)
  }


  return 'module.exports = {"list": ' + JSON.stringify(tempArr) + '};';
};