/*
*
*
*       Complete the handler logic below
*       
*       
*/

const galToL = 3.78541;
const LToGal = 1/galToL;
const lbsToKg = 0.453592;
const kgToLbs = 1/lbsToKg;
const miToKm = 1.60934;
const kmToMi = 1/miToKm;

const units = {'gal':{unit:'L',volume:galToL,value:'Litre'},
                   'lbs':{unit:'kg',volume:lbsToKg,value:'Kilogram'},
                   'L':{unit:'gal',volume:LToGal,value:'Gallon'},
                   'kg':{unit:'lbs',volume:kgToLbs,value:'Pound'},
                   'mi':{unit:'km',volume:miToKm,value:'Miles'},
                   'km':{unit:'mi',volume:kmToMi,value:'Kilometer'}};
function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    console.log("result :: ",input);
    result = input.split(/[a-z]+/i)[0];
    console.log("result after :: ",result);
    if(/\//.test(result)){
        result = result.split(/\//);
        console.log("inside ddlk ",result);
        result = Number(result[0]/result[1]);
    } 
     return Number(result)?Number(result):false;
  };
  
  this.getUnit = function(input) {
    var result;
    result = input.split(/\d+\.?\d+|\d/)[1];
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    if(units.hasOwnProperty(initUnit)){
      return units[initUnit].unit;
   }
    return false;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    if(units.hasOwnProperty(initUnit)){
       return units[initUnit].volume * initNum;
    }
    return false;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    console.log("get string:: ",initNum,initUnit,returnNum,returnUnit);
    result = {initNum: initNum,initUnit:initUnit,returnNum:returnNum,returnUnit:returnUnit,
            string:`${initNum} ${units[initUnit].value} converts to ${returnNum} ${units[returnUnit].value}`}
    return result;
  };
  
}

module.exports = ConvertHandler;