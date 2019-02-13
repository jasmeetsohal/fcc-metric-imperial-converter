/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
    console.log("from api",req.query.input);
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      console.log("rlsls :",initNum,initUnit,returnNum,returnUnit);
      //var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      res.json(toString);  
    //console.log(toString);
      //res.json
    });
    
};
