'use strict';
module.exports = function() {
  
  let obj = {};

  let setValue = function setValue (key,value){
    obj[key] = value;
  }
  let getValue = function getValue (key){
    if(key === undefined || !obj.hasOwnProperty(key)){
      return null;
    }else{
      return obj[key];
    }
  }

return{
  setValue: setValue,
  getValue: getValue
}

};