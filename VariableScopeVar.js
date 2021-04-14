// var In Global Scope

var FirstVar="A Name";
console.log("FirstVar",FirstVar);
var FirstVar="A Name Is Changed";
console.log("FirstVar after Redeclare",FirstVar);

// var In Functional Scope

function functionalScope(){
 var InFuncVar= "InFuncVar 1"
 console.log("InFuncVar",InFuncVar);
 if(true===true){
    console.log("InFuncVar In If Condition 1",InFuncVar);
    if(true===true){
        InFuncVar="InFuncVar Value Update"
        console.log("InFuncVar In If Condition 2",InFuncVar);
        if(true===true){
            console.log("InFuncVar In If Condition 3",InFuncVar);
         }
     }
     console.log("InFuncVar Outside Updated Scope:",InFuncVar);
    function CheckValue(){
        console.log("InFuncVar from function:",InFuncVar);
    }
    CheckValue();
 }
 console.log("InFuncVar Outside Updated Scope:",InFuncVar);
 CheckValue();
}
//console.log("InFuncVar",InFuncVar);
functionalScope();