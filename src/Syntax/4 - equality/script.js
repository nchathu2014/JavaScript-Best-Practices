/**
 * Created by UCHATNU on 7/10/2016.
 */


var x=0;
var y = "1";


function withTypeConversion(){
    if(x == y){  //do the necessary type conversion
        console.log("True");
    }else{
        console.log("False");
    }
}

function withoutTypeConversion(){
    if(x === y){ //NOT do the necessary type conversion
        console.log("True");
    }else{
        console.log("False");
    }
}

function variableExisitanceCheck(){

    if(typeof x !== "undefined"){
        console.log("X is there");
    }else{
        console.log("X is NOT there");

    }


}

withTypeConversion();
withoutTypeConversion();
variableExisitanceCheck();



