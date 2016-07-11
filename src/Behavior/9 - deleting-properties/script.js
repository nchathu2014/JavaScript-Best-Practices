/**
 * Created by UCHATNU on 7/10/2016.
 */
"use strict";
var studentObj={
    id:100,
    name:"Nuwan",
    score:90
};

try{
    delete studentObj.id;
    console.log(studentObj);
}catch(err){
    console.log("Error : "+err);
}



