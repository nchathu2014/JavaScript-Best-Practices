/**
 * Created by UCHATNU on 7/10/2016.
 */

function service(){

    function set(){
        console.log("I am a set function");
    }
    function get(){
        console.log("I am a get function");
    }

    return{
        set:set,
        get:get
    }

}

var serviceIns = service();
console.log(serviceIns.set())
console.log(serviceIns.get())


