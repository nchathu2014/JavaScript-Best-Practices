/**
 * Created by UCHATNU on 7/10/2016.
 */

    "use strict";

var studentObj={};

Object.defineProperty(studentObj,"id",{
    value:"100",
    writable:true
});

try{
    studentObj.id=101
    console.log(studentObj.id);
}catch(er){
    console.error("Error : "+er);
}


