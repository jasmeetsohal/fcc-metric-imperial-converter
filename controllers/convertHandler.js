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

const units = {'gal':{unit:'l',volume:galToL,value:'Litre'},
                   'lbs':{unit:'kg',volume:lbsToKg,value:'Kilogram'},
                   'l':{unit:'gal',volume:LToGal,value:'Gallon'},
                   'kg':{unit:'lbs',volume:kgToLbs,value:'Pound'},
                   'mi':{unit:'km',volume:miToKm,value:'Kilometer'},
                   'km':{unit:'mi',volume:kmToMi,value:'Miles'}};


const validUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    result = input.split(/[a-z]+/i)[0];
    result = !result?1:result;
    if(/\//.test(result)){
        result = result.split(/\//);
        result = (result.length > 2) ? false : (Number(result[0]/result[1]));
    } 
     return Number(result)?Number(result):false;
  };
  
  this.getUnit = function(input) {
    var result;
    result = input.toLowerCase();
    return validUnits.includes(result)?input:false;
  };
  
  this.getReturnUnit = function(initUnit) {
    initUnit = initUnit.toLowerCase();
    if(units.hasOwnProperty(initUnit)){
      return units[initUnit].unit;
   }
    return false;
  };

  this.spellOutUnit = function(unit) {
    var result;
    result = units.hasOwnProperty(unit)? units[unit].value:false;
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    initUnit = initUnit.toLowerCase();
    if(units.hasOwnProperty(initUnit)){
       return units[initUnit].volume * initNum;
    }
    return false;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return {initNum: initNum,initUnit:initUnit,returnNum:returnNum,returnUnit:returnUnit,
            string:`${initNum} ${units[returnUnit.toLowerCase()].value} converts to ${returnNum} ${units[initUnit.toLowerCase()].value}`}
  };
  
}

module.exports = ConvertHandler;