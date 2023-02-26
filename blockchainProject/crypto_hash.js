const crypto=require("crypto");

const hexTobinary=require("hex-to-binary") ;

const cryptoHash=(...inputs)=>{
    const hash=crypto.createHash('sha256');
    hash.update(inputs.join(""));//hello world
    return hash.digest("hex");
};

// result=cryptoHash("hello","world");
// console.log(result);

module.exports=cryptoHash;