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
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      input = input.split(/\d+\.?\d+\/?\d+|\d+\/?\d+|\d+\.?\d+|\d/);
      input = input.length == 1 ? input[0]:input[1];
      var initUnit = convertHandler.getUnit(input);
      if(initUnit != false){
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      res.json(toString);  
      }
     res.json({error:'Invalid Input'});
    });
    
};
