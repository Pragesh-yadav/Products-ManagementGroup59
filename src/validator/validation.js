const mongoose = require('mongoose')
const bcrypt = require("bcrypt");

//validation for empty request body
const isValidRequest = function(data){
    if(Object.keys(data).length == 0){
        return false
    }
    return true
  }

const isValidString = function (value) {
    if (typeof value == undefined || value == null) return false;
    if (typeof value == "string" && value.trim().length == 0) return false;
    return true;
}

const isValidName = function(name){
    return /^[a-zA-Z ,]+.*$/.test(name)
} 

// function for email verification
const isValidMail = function (email) {
    return /^([0-9a-z]([-_\\.]*[0-9a-z]+)*)@([a-z]([-_\\.]*[a-z]+)*)[\\.]([a-z]{2,9})+$/.test(email);
};

//function for verifying mobile number
const isValidPhone = function(phone){
    return  /^((\+91(-| )+)|0)?[6-9][0-9]{9}$/.test(phone); 
  };

// function for password verification
const isValidPassword = function (pass) {
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/.test(pass);
  };

 //function for pincode verification
 const isValidPincode = function(pin){
    return /^[1-9][0-9]{5}$/.test(pin)
};

const isValidId = function(id){
    if(!mongoose.Types.ObjectId.isValid(id)){
     return false
    }return true
 }

const isImageFile = function(files){
    let imageRegex = /.*\.(jpeg|jpg|png)$/;
    return imageRegex.test(files)
}

const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
  // console.log(await bcrypt.compare(password, hash))
};

const isValidPrice = function (value) {
    if (/^\d+(\.\d{1,2})?$/.test(value)) return true;
    return false;
  };

  const isValidBoolean = function (value) {
    return value === "true" || value === "false";
  };

  const isValidNum = function (value) {
    if (!/^[0-9]+$/.test(value)) {
      return false;
    }
    return true;
  };

  const isSize = function (title) {
    return ["S", "XS", "M", "X", "L", "XXL", "XL"].includes(title.toUpperCase());
  };

  const isValidSize = (Arr) => {
    let newArr = [];
    if (Arr.length === 0) {
      return false;
    }
    let brr = Arr[0].split(",");
    for (let i = 0; i < brr.length; i++) {
      if (
        !["S", "XS", "M", "X", "L", "XXL", "XL"].includes(brr[i].toUpperCase())
      ) {
        return false;
      }
      newArr.push(brr[i].toUpperCase());
    }
    return newArr;
  };

  const isValidStatus = function (status) {
    let enumArr = ["pending", "completed", "cancelled"];
    return enumArr.includes(status); // returns a boolean
  };
  


module.exports = {  isValidRequest,
                    isValidString,
                    isValidName,
                    isValidMail,
                    isValidPhone,
                    isValidPassword,
                    isValidPincode,
                    isValidId,
                    isImageFile,
                    hashPassword,
                    isValidPrice,
                    isValidBoolean,
                    isValidNum,
                    isImageFile,
                    isSize,
                    isValidSize,
                    isValidStatus}
